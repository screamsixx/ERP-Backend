import { Router } from 'express';
import { usuariosController } from '../../controllers/usuariosController';
import { AuthMiddleware } from '../../utils/authMiddleware';

const usuariosRouter = Router();
const usuariosControllerInstance = new usuariosController();
const authMiddlewareInstance = new AuthMiddleware(); // Crear una instancia del middleware

//lista de metodos disponibles por controlador
usuariosRouter.post('/login', authMiddlewareInstance.verifyToken,usuariosControllerInstance.insertarUsarios);
usuariosRouter.get('/', authMiddlewareInstance.verifyToken,usuariosControllerInstance.obtenerTodosLosUsuarios);
usuariosRouter.post('/', authMiddlewareInstance.verifyToken,usuariosControllerInstance.insertarUsarios);
usuariosRouter.delete('/:id', authMiddlewareInstance.verifyToken,usuariosControllerInstance.eliminarUsariosID);
export default usuariosRouter;
