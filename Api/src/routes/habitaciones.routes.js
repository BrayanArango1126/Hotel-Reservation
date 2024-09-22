import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/habitaciones/fotos/:idHabitacion', async (req, res) => {
  try{
    const idHabitacion = req.params;
    const [habitaciones] = await conexionApi.query('SELECT ' +
	    ' Hab.idHabitacion, ' +
	    ' Hab.idHotel, ' + 
      ' Hot.nombre AS nombreHotel, ' +
      ' Fo.url ' +
      ' FROM habitaciones AS Hab ' +
      ' INNER JOIN Fotos AS Fo ' +
      ' 	ON Hab.idHabitacion = Fo.idHabitacion ' +
      ' INNER JOIN Hoteles AS Hot ' +
      ' 	ON Hot.idHotel = Hab.idHotel ' +
      ' WHERE Hab.idHabitacion = ?', [idHabitacion.idHabitacion]);
    res.status(200).json(habitaciones);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

router.get('/habitaciones/room/:idHabitacion', async (req, res) => {
  try{
    const idHabitacion = req.params;
    const [habitaciones] = await conexionApi.query('SELECT ' +
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
      ' Fo.url, ' +
      ' Ser.idServicio, ' +
      ' Ser.servicio AS nombreServicio, ' +
      ' icon_ser.icon ' +
      ' FROM habitaciones AS Hab ' +
      ' INNER JOIN Fotos AS Fo ' +
      ' 	ON Hab.idHabitacion = Fo.idHabitacion ' +
      ' INNER JOIN Hoteles AS Hot ' +
      ' 	ON Hot.idHotel = Hab.idHotel ' +
      'INNER JOIN servicios_hoteles as ser_hot ' +
	    '  ON ser_hot.idHotel = Hot.idHotel ' +
      'INNER JOIN servicios as ser ' +
      '	ON Ser.idServicio = ser_hot.idServicio ' +
      'INNER JOIN Icon_Service as icon_ser ' +
      '	ON icon_ser.idservicio = ser.idservicio ' +
      ' WHERE Hab.idHabitacion = ?', [idHabitacion.idHabitacion]);
    res.status(200).json(habitaciones);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

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