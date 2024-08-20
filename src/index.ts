import express from 'express';
import usuariosRoutes from './routes/usuariosRoutes';

const app = express();
const port = process.env.PORT || 3000; // Usar puerto de entorno o 3000 por defecto

app.use(express.json());

app.use('/api/usuarios', usuariosRoutes); //rutas de controlador usuarios

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});