import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

// router.get('/habitaciones/list', async (req, res) => {
//   const [habitaciones] = await conexionApi.query('SELECT * FROM habitaciones');
//   res.json(habitaciones);
// });

router.get('/habitaciones/list', async (req, res) => {
  try {
    const [hoteles] = await conexionApi.query('SELECT ' +
	    ' Hab.idHabitacion, ' +
	    ' Hab.idHotel, ' +
      ' Hab.nombre,  ' +
      ' Hab.descripcion,  ' +
      ' Hab.capacidad,  ' +
      ' Hab.disponibilidad, ' +
      ' Hab.cantidadCamas,  ' +
      ' Hab.calificacion,  ' +
      ' Hab.cantidadBanos, ' +
      ' Hab.tipoCama,  ' +
      ' Hab.cantidadHabitaciones, ' +
      ' Hab.hayCocina, ' +
      ' Hab.precio, ' +
      ' Hot.nombre AS nombreHotel, ' +
      ' Fo.url ' +
    ' FROM habitaciones AS Hab ' +
    ' LEFT JOIN Fotos AS Fo ' +
    ' 	ON Fo.idHabitacion = Hab.idHabitacion ' +
    ' LEFT JOIN Hoteles AS Hot ' +
    ' 	ON Hab.idHotel = Hot.idHotel ' +
    ' GROUP BY Hab.idHabitacion;');
    res.json(hoteles);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

export default router;