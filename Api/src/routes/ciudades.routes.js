import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/ciudades/list', async (req, res) => {    
  try{
    const [ciudades] = await conexionApi.query('SELECT * FROM Ciudades');
    res.status(200).json(ciudades);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

router.get('/ciudades/list/better', async (req, res) => {    
  const [ciudadesBetter] = await conexionApi.query('SELECT ' +
     'Ciu.idciudad, ' +
     'Ciu.ciudad, ' +
     'AVG(Res.calificacion) AS puntaje, ' +
     'COUNT(Ciu.ciudad) AS visitantes, ' +
     'Fo.url ' +
    'FROM Resenas AS Res ' +
    'INNER JOIN Hoteles AS Hot ' +
    	'ON Hot.idHotel = Res.idHotel ' +
    'INNER JOIN Ciudades AS Ciu ' +
    	'ON Ciu.idCiudad = Hot.idCiudad ' +
    'INNER JOIN Fotos AS Fo ' +
    	'ON Fo.idCiudad = Ciu.idCiudad ' +
    'WHERE Res.idHotel IS NOT NULL ' +
    'GROUP BY Ciu.ciudad ' +
    'ORDER BY puntaje DESC ' +
    'LIMIT 4;');
  res.json(ciudadesBetter);
});

export default router;