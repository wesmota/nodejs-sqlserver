import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import FormularioRoutes from './routes/formulario.routes'
import {createConnection} from 'typeorm';
import errorMiddleware from './middleware/error.middleware';

const app = express();

createConnection();
//middlewares 
app.use(cors());
app.use(express.json());
app.use(errorMiddleware);
app.use(express.urlencoded());

//routes 
app.use(FormularioRoutes);

app.listen(5000);
console.log('Server on Port',5000);