import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import hotelRoutes from './routes/hoteles.routes.js';
import resenasRoutes from './routes/resenas.routes.js';
import actividadesRoutes from './routes/actividades.routes.js';
import serviciosRoutes from './routes/servicios.routes.js';
import habitacionesRoutes from './routes/habitaciones.routes.js';
import reservacionesRoutes from './routes/reservaciones.routes.js';
import fotosRoutes from './routes/fotos.routes.js';
import ciudadesRoutes from './routes/ciudades.routes.js';
import categoriasHotelesRoutes from './routes/categorias_hoteles.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import generosRoutes from './routes/generos.routes.js';
import paisesRoutes from './routes/paises.routes.js';

//creamos el servidor
const app = express();
const port = 3001;

//settings

app.set('port', port);

//middlewares

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes 
app.use('/api', hotelRoutes);
app.use('/api', resenasRoutes);
app.use('/api', actividadesRoutes);
app.use('/api', serviciosRoutes);
app.use('/api', habitacionesRoutes);
app.use('/api', reservacionesRoutes);
app.use('/api', fotosRoutes);
app.use('/api', ciudadesRoutes);
app.use('/api', categoriasHotelesRoutes);
app.use('/api', usuariosRoutes);
app.use('/api', generosRoutes);
app.use('/api', paisesRoutes);




//run server
app.listen(app.get('port'), () => {
  console.log('El puerto que se está escuchando es', app.get('port'));
});




