import { usuario } from '../models/usuario';

export class usuariosService {
  
  static async obtenerTodosLosUsuarios(): Promise<usuario[]> {
    let listaUsuarios: usuario[] = [{
      id: 0,
      password:'123',
      nombre: 'julio',
      apellidoPaterno: 'string',
      apellidoMaterno: 'string',
      email: 'julioparo.888@gmail.com',
      fechaNacimiento: Date.now().toString(),
      esAdmin: true
  }];
    return Promise.resolve(listaUsuarios);
  }
}