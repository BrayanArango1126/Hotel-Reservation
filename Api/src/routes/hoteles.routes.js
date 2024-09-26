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
      'Pais.longitud AS longitudPais, ' +
      'Fo.url, ' +
      'MIN(Hab.precio) AS precioMinimo ' +
    ' FROM hoteles AS Hot ' +
    ' INNER JOIN Ciudades AS Ciud ' +
    ' ON Hot.idCiudad = Ciud.idCiudad ' +
    ' INNER JOIN Paises AS Pais ' +
    ' ON Ciud.idPais = Pais.idPais ' +
    ' INNER JOIN categorias_hoteles AS Cat_Hot ' +
    ' ON Cat_Hot.idCategoriaHotel = Hot.idCategoriaHotel ' +
    ' LEFT JOIN Fotos AS Fo ' +
    ' ON Fo.idHotel = Hot.idHotel ' +
    ' LEFT JOIN Habitaciones AS Hab ' +
    ' ON Hab.idHotel = Hot.idHotel ' +
    ' GROUP BY Hot.idhotel;');
    res.json(hoteles);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

router.get('/hoteles/details/:idHotel', async (req, res) => {
  try {
    const idHotel = req.params.idHotel;
    const [hotel] = await conexionApi.query('SELECT  ' +
	    ' Hot.idHotel, ' +
      ' Hot.nombre AS nombreHotel, ' +
      ' Hot.descripcion, ' +
      ' Hot.idCategoriaHotel, ' +
      ' Cat.categoria, ' +
      ' Hot.telefono, ' +
      ' Hot.direccion, ' +
      ' Hot.correo, ' +
      ' Hot.estrellas, ' +
      ' Hot.generoPermitido, ' +
      ' Hot.idCiudad, ' +
      ' Ciu.ciudad, ' +
      ' Pai.pais, ' +
      ' Fo.url ' +
    ' FROM Hoteles AS Hot ' +
    ' INNER JOIN Categorias_Hoteles AS Cat ' +
    ' 	ON Hot.idCategoriaHotel = Cat.idCategoriaHotel ' +
    ' INNER JOIN Ciudades AS Ciu ' +
    ' 	ON Ciu.idCiudad = Hot.idCiudad ' +
    ' INNER JOIN Paises AS Pai ' +
    ' 	ON Ciu.idPais = Pai.idPais ' +
    ' LEFT JOIN Fotos AS Fo ' +
    ' 	ON Hot.idHotel = Fo.idHotel ' +
    ' WHERE Hot.idHotel = ?;', [idHotel]);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});




router.get('/hoteles/list/filtros', async (req, res) => {
  try{
    const idCategoriaHotel = req.query.idCategoriaHotel;
    const estrellas = req.query.estrellas;
    const idCiudad = req.query.idCiudad;
    const idPais = req.query.idPais;
    const generoPermitido = req.query.generoPermitido;

    let query = 'SELECT ' +
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
      'Pais.longitud AS longitudPais, ' +
      'Fo.url, ' +
      'MIN(Hab.precio) AS precioMinimo ' +
    ' FROM hoteles AS Hot ' +
    ' INNER JOIN Ciudades AS Ciud ' +
    ' ON Hot.idCiudad = Ciud.idCiudad ' +
    ' INNER JOIN Paises AS Pais ' +
    ' ON Ciud.idPais = Pais.idPais ' +
    ' INNER JOIN categorias_hoteles AS Cat_Hot ' +
    ' ON Cat_Hot.idCategoriaHotel = Hot.idCategoriaHotel ' +
    ' LEFT JOIN Fotos AS Fo ' +
    ' ON Fo.idHotel = Hot.idHotel ' +
    ' LEFT JOIN Habitaciones AS Hab ' +
    ' ON Hab.idHotel = Hot.idHotel ';

    const conditions = [];
    const values = [];

    if (idCategoriaHotel) {
      conditions.push(' Hot.idCategoriaHotel = ?');
      values.push(idCategoriaHotel);
    }
    if (estrellas ) {
      conditions.push(' Hot.estrellas = ?');
      values.push(estrellas);
    }
    if (generoPermitido) {
      conditions.push(' Hot.generoPermitido = ?');
      values.push(generoPermitido);
    }
    if (idPais) {
      conditions.push(' Ciud.idPais = ?');
      values.push(idPais);
    }
    if (idCiudad) {
      conditions.push(' Hot.idCiudad = ?');
      values.push(idCiudad);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' GROUP BY Hot.idHotel;';

    const [hoteles] = await conexionApi.query(query, values);
    res.status(200).json(hoteles);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});


export default router;