import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/resenas/list/:idHabitacion', async (req, res) => {
  try{
    const idHabitacion = req.params;
    const result = await conexionApi.query('SELECT ' +
      'res.idResena,' +
      'res.idHabitacion,' +
      'res.idUsuario,' +
      'res.comentario,' +
      'res.calificacion,' +
      'usu.nombres AS nombreUsuario,' +
      'usu.apellidos AS apellidoUsuario,' +
      'res.fecha_registro as fecha' +
    ' FROM resenas AS res' +
    ' INNER JOIN usuarios as usu' +
    ' 	ON usu.idUsuario = res.idUsuario' +
    ' WHERE res.idHabitacion = ?;', [idHabitacion.idHabitacion]);
    res.status(200).json(result[0]);
  }
  catch(error){
    res.status(500).json({error: error.message});
  }
});

export default router;