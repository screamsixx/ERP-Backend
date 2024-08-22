import express from 'express';
import usuariosRouter from './usuarios/usuariosRoutes';

const router = express.Router();

// Rutas de cada controlador
router.use('/usuarios', usuariosRouter);

export default router;