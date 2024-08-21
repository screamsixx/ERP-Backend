import { catchError, from, map, Observable, throwError } from 'rxjs';
import { usuario } from '../models/usuario';
import mysqlConnection from '../utils/mysqlConnection';
import { RowDataPacket } from 'mysql2';

export class usuariosService {

  static obtenerTodosLosUsuarios(): Observable<usuario[]> {
    return from(mysqlConnection.query('SELECT * FROM ejemplo.usuario'))
      .pipe(
        map((result) => {
          const rows = result[0] as RowDataPacket[];
          return rows.map((row) => ({
            id: row.id,
            pass: row.pass,
            nombre: row.nombre,
            apellidoPaterno: row.apellidoPaterno,
            apellidoMaterno: row.apellidoMaterno,
            email: row.email,
            fechaNacimiento: row.fechaNacimiento, // Asegúrate de que 'fechaNacimiento' sea 'fechaNacimiento' en la base de datos
            esAdmin: !!row.esAdmin, // Convertir a booleano si es necesario
          }));
        }),
        catchError((error) => {
          console.error('Error al obtener usuarios:', error);
          return throwError(() => error); // Propagar el error
        })
      );
  }

}