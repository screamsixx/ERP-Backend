import { catchError, from, map, Observable } from 'rxjs';
import { usuario } from '../models/usuario';
import mysqlConnection from '../utils/mysqlConnection';
import { RowDataPacket } from 'mysql2';

export class usuariosService {

    static loginUsuario(_email: string, _pass: string): Observable<number> {
        const query = `SELECT login('${_email}', '${_pass}')`; 
        return from(mysqlConnection.query(query))
            .pipe(
                map((result) => {
                    if (Array.isArray(result) && result.length > 0 && typeof result[0] === 'number') {
                        return result[0];
                    } else {
                        throw new Error('Resultado inesperado: ' + JSON.stringify(result));
                    }
                }),
                catchError((error) => {
                    throw new Error('Error en login usuarios: ' + error.message);
                })
            );
    }

    static insertarUsuario(_usuario: usuario): Observable<number> {
        const query = `SELECT insertar_usuario(${_usuario.pass},${_usuario.nombre}, ${_usuario.apellidoPaterno},${_usuario.apellidoMaterno},${_usuario.email}, ${_usuario.fechaNacimiento}, ${_usuario.rol})`;
        return from(mysqlConnection.query(query))
            .pipe(
                map((result) => {
                    if (Array.isArray(result) && result.length > 0 && typeof result[0] === 'number') {
                        return result[0];
                    } else {
                        throw new Error('Resultado inesperado: ' + JSON.stringify(result));
                    }
                }),
                catchError((error) => {
                    throw new Error('Error al insertar usuarios: ' + error.message);
                })
            );
    }

    static eliminarUsuario(id: number): Observable<number> {
        const query = `SELECT eliminar_usuario(${id})`;
        return from(mysqlConnection.query(query))
            .pipe(
                map((result) => {
                    if (Array.isArray(result) && result.length > 0 && typeof result[0] === 'number') {
                        return result[0];
                    } else {
                        throw new Error('Resultado inesperado: ' + JSON.stringify(result));
                    }
                }),
                catchError((error) => {
                    throw new Error('Error al eliminar usuarios: ' + error.message);
                })
            );
    }

    static obtenerTodosLosUsuarios(): Observable<usuario[]> {
        return from(mysqlConnection.query('SELECT * FROM ejemplo.usuario'))
            .pipe(
                map((result) => {
                    const rows = result[0] as RowDataPacket[];
                    return rows.map((row) => new usuario(
                        row.id,
                        row.pass,
                        row.nombre,
                        row.apellidoPaterno,
                        row.apellidoMaterno,
                        row.email,
                        row.fechaNacimiento,
                        row.rol
                    ));
                }),
                catchError((error) => {
                    throw new Error('Error al obtener usuarios: ' + error.message);
                })
            );
    }

}