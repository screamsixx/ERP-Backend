import { Request, Response } from 'express';
import { usuariosService } from '../services/usuarioServices';
import { simpleResponse } from '../utils/simpleResponse'; // Ajusta la ruta según tu proyecto

export class usuariosController {
  async obtenerTodosLosUsuarios(_req: Request, res: Response) {
    usuariosService.obtenerTodosLosUsuarios()
      .subscribe({
        next: (usuarios) => {
          simpleResponse.success(_req, res, usuarios);
        },
        error: (error) => {
          simpleResponse.error(_req, res, error.message);
        }
      });
  }
}