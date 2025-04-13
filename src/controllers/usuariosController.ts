import { Request, Response } from 'express';
import { usuariosService } from '../services/usuarioServices';
import { simpleResponse } from '../utils/simpleResponse';

export class usuariosController {
  /**
   * @swagger
   * /login:
   *   post:
   *     summary: Autentica un usuario
   *     description: Verifica las credenciales y devuelve un token JWT
   *     tags: [Usuarios]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               user:
   *                 type: string
   *               pass:
   *                 type: string
   *             required:
   *               - user
   *               - pass
   *     responses:
   *       200:
   *         description: Autenticación exitosa
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 id:
   *                   type: number
   *                 user:
   *                   type: string
   *                 token:
   *                   type: string
   *       400:
   *         description: Datos incompletos
   *       401:
   *         description: Credenciales inválidas
   *       500:
   *         description: Error del servidor
   */
  async loginUsuario(req: Request, res: Response) {
    try {
      const { user, pass } = req.body;

      // Validación básica en el controlador
      if (!user || !pass) {
        return simpleResponse.error(req, res, 'Usuario y contraseña son requeridos', 400);
      }

      usuariosService.loginUsuario(user, pass)
        .subscribe({
          next: (response) => simpleResponse.success(req, res, response),
          error: (err) => {
            // Maneja errores estructurados del servicio
            const status = err.status || 500;
            const message = err.body || err.message || 'Error en autenticación';
            simpleResponse.error(req, res, message, status);
          }
        });
    } catch (error) {
      simpleResponse.error(req, res, 'Error interno del servidor', 500);
    }
  }

  async hello(_req: Request, res: Response) {
    return res.json({ message: 'Hola' });
  }
}