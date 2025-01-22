import { Request, Response } from 'express';
import { usuariosService } from '../services/usuarioServices';
import { simpleResponse } from '../utils/simpleResponse'; // Ajusta la ruta según tu proyecto
import { usuario } from '../models/usuario';

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Operaciones relacionadas con usuarios
 */

export class usuariosController {
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
 * 
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

  async insertarUsarios(_req: Request, res: Response) {
    const usuarioBody: usuario = _req.body as usuario; //enviar el body al servicio que inserta
    usuariosService.insertarUsuario(usuarioBody)
      .subscribe({
        next: (usuarios) => {
          simpleResponse.success(_req, res, usuarios);
        },
        error: (error) => {
          simpleResponse.error(_req, res, error.message);
        }
      });
  }

  async eliminarUsariosID(_req: Request, res: Response) {
    const idString = _req.params.id; // Obtener el ID como cadena de texto primero
    const id = parseInt(idString);
    usuariosService.eliminarUsuario(id)
      .subscribe({
        next: (usuarios) => {
          simpleResponse.success(_req, res, usuarios);
        },
        error: (error) => {
          simpleResponse.error(_req, res, error.message);
        }
      });
  }

  async loginUsario(_req: Request, res: Response) {
    const pass=_req.body.pass;
    const email= _req.body.email;
    usuariosService.loginUsuario(email,pass)
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