import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/hoteles/list', async (req, res) => {
  try {
    // const [hoteles] = await conexionApi.query('SELECT * FROM hoteles AS Hot INNER JOIN Ciudades AS Ciud ON Hot.idCiudad = Ciud.idCiudad INNER JOIN Paises AS Pais ON Ciud.idPais = Pais.idPais');
    const [hoteles] = await conexionApi.query('SELECT ' +
	    'Hot.idHotel, ' +
      'Hot.nombre, ' +
      'Hot.descripcion, ' +
      'Cat_Hot.categoria, ' +
      'Hot.telefono, ' +
      'Hot.direccion, ' +
      'Hot.correo, ' +
      'Hot.estrellas, ' +
      'Hot.generoPermitido, ' +
      'Ciud.ciudad, ' +
      'Ciud.latitud AS latitudCiudad, ' +
      'Ciud.longitud AS longitudCiudad, ' +
      'Pais.pais, ' +
      'Pais.latitud AS latitudPais, ' +
      'Pais.longitud AS longitudPais ' +
    ' FROM hoteles AS Hot ' +
    ' INNER JOIN Ciudades AS Ciud ' +
    ' ON Hot.idCiudad = Ciud.idCiudad ' +
    ' INNER JOIN Paises AS Pais ' +
    ' ON Ciud.idPais = Pais.idPais' +
    ' INNER JOIN categorias_hoteles AS Cat_Hot' +
    ' ON Cat_Hot.idCategoriaHotel = Hot.idCategoriaHotel;');
    res.json(hoteles);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

export default router;