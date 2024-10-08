import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import reservacionesRoutes from './routes/reservaciones.routes.js';

//creamos el servidor
const app = express();
const port = 3000;

//settings

app.set('port', port);

//middlewares

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes 
app.use(reservacionesRoutes);

//run server
app.listen(app.get('port'), () => {
  console.log('El puerto que se está escuchando es', app.get('port'));
});




