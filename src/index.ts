import express from 'express';
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
import router from './routes'; //Todas las rutas de controladores concentrados en un archivo

const app = express();
const port = process.env.PORT || 3000; // Usar puerto de entorno o 3000 por defecto
app.use(express.json());

// Integrar Swagger
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));


app.use('/api', router); //router que contiene todas las rutas

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});