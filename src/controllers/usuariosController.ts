import { Request, Response } from 'express';
import { usuariosService } from '../services/usuarioServices';
import { simpleResponse } from '../utils/simpleResponse'; // Ajusta la ruta según tu proyecto

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Operaciones relacionadas con usuarios
 */

export class usuariosController{
    /**
   * @swagger
   * /usuarios:
   *   get:
   *     summary: Obtiene todos los usuarios
   *     description: Retorna una lista de todos los usuarios
   *     tags: [Usuarios]
   *     responses:
   *       200:
   *         description: Éxito
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *  
   *       500:
   *         description: Error del servidor
   */
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