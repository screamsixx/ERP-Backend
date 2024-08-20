import { Request, Response } from 'express';
import { usuariosService } from '../services/usuarioServices';

export class usuariosController {
    async obtenerTodosLosUsuarios(_req: Request, res: Response) {
      const usuarios = await usuariosService.obtenerTodosLosUsuarios();
      res.json(usuarios);
    }
  }