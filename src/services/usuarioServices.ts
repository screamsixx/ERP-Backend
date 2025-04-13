import { catchError, from, map, mergeMap, Observable } from 'rxjs';
import mysqlConnection from '../utils/mysqlConnection';
import { AuthMiddleware } from '../utils/authMiddleware';

export class usuariosService {
  static loginUsuario(user: string, pass: string): Observable<{ id: number, user: string, token: string }> {
    const query = `SELECT login(?, ?) AS id`;
    const auth = new AuthMiddleware();

    return from(mysqlConnection.execute(query, [user, pass])).pipe(
      map((result: any) => {
        const [rows] = result;
        
        if (!Array.isArray(rows) || rows.length === 0) {
          throw {
            error: true,
            status: 401,
            body: 'Credenciales inválidas'
          };
        }

        const id = rows[0]?.id;
        
        if (typeof id !== 'number') {
          throw {
            error: true,
            status: 500,
            body: 'Error en la respuesta del servidor'
          };
        }
        
        return id;
      }),
      mergeMap((id: number) => {
        if (id > 0) {
          return auth.createToken(user).pipe(
            map((token: string) => ({
              id,
              user,
              token: `Bearer ${token}` // Concatenación correcta del Bearer
            }))
          );
        }
        throw {
          error: true,
          status: 401,
          body: 'Credenciales inválidas'
        };
      }),
      catchError((error) => {
        console.error('Error en login:', error);
        throw {
          error: true,
          status: error.status || 500,
          body: error.body || error.message || 'Error en autenticación'
        };
      })
    );
  }
}