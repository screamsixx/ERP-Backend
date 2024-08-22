import { Router } from 'express';
import { usuariosController } from '../../controllers/usuariosController';
import { AuthMiddleware } from '../../utils/authMiddleware';

const usuariosRouter = Router();
const usuariosControllerInstance = new usuariosController();
const authMiddlewareInstance = new AuthMiddleware(); // Crear una instancia del middleware

//lista de metodos disponibles por controlador
usuariosRouter.get('/', authMiddlewareInstance.verifyToken,usuariosControllerInstance.obtenerTodosLosUsuarios);

export default usuariosRouter;
