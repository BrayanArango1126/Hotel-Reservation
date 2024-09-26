import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/actividades/list', async (req, res) => {
  const [actividades] = await conexionApi.query('SELECT * FROM actividades');
  res.json(actividades);
});


router.get('/actividades/list/:idHotel', async (req, res) => {
  try{
    const idHotel = req.params.idHotel; 
    const [actividades] = await conexionApi.query('SELECT  ' +
	    ' Act.idActividad, ' +
      ' Act.nombre, ' +
      ' Act.descripcion, ' +
      ' Act.precio, ' +
      ' Act.fecha_inicio, ' +
      ' Act.fecha_fin, ' +
      ' Act.idHotel, ' +
      ' Fo.url ' +
    ' FROM actividades AS Act ' +
    ' LEFT JOIN Fotos AS Fo ' +
    ' 	ON Act.idActividad = Fo.idActividad ' +
    ' WHERE Act.idActividad = ?;', [idHotel]);
    res.status(200).json(actividades);
  }catch (error){
    res.status(400).json({error: error.message});
  }
});

export default router;