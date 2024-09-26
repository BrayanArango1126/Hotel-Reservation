import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/servicios/list/:idHabitacion', async (req, res) => {
  try{
    const idHabitacion = req.params;
    const result = await conexionApi.query('SELECT ' +
	    'hab.idHabitacion,' +
      'hab.idHotel,' +
      'ser_hot.idServicio,' +
      'ser.servicio,' +
      'icon_ser.icon' +
    ' FROM habitaciones AS hab' +
    ' INNER JOIN hoteles as hot' +
    ' 	ON hot.idHotel = hab.idHotel' +
    ' INNER JOIN servicios_hoteles as ser_hot' +
    ' 	ON ser_hot.idHotel = hot.idHotel' +
    ' INNER JOIN servicios as ser' +
    ' 	ON Ser.idServicio = ser_hot.idServicio' +
    ' INNER JOIN Icon_Service as icon_ser' +
    ' 	ON icon_ser.idservicio = ser.idservicio' +
    ' WHERE hab.idHabitacion = ?;', [idHabitacion.idHabitacion]);
    res.status(200).json(result[0]);
  }catch(error){
    res.status(500).json({error: error.message});
  }
});

router.get('/servicios/list/:idHotel', async (req, res) => {
  try{
    const idHotel = req.params.idHotel;
    const result = await conexionApi.query('SELECT ' +
	    'hab.idHabitacion,' +
      'hab.idHotel,' +
      'ser_hot.idServicio,' +
      'ser.servicio,' +
      'icon_ser.icon' +
    ' FROM habitaciones AS hab' +
    ' INNER JOIN hoteles as hot' +
    ' 	ON hot.idHotel = hab.idHotel' +
    ' INNER JOIN servicios_hoteles as ser_hot' +
    ' 	ON ser_hot.idHotel = hot.idHotel' +
    ' INNER JOIN servicios as ser' +
    ' 	ON Ser.idServicio = ser_hot.idServicio' +
    ' INNER JOIN Icon_Service as icon_ser' +
    ' 	ON icon_ser.idservicio = ser.idservicio' +
    ' WHERE Hot.idHotel = ?;', [idHotel]);
    res.status(200).json(result[0]);
  }catch(error){
    res.status(500).json({error: error.message});
  }
});

export default router;