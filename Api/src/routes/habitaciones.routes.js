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

router.get('/habitaciones/room/ubicacion/:idHabitacion', async (req, res) => {
  try{
    const idHabitacion = req.params;
    const [habitaciones] = await conexionApi.query('SELECT ' +
	    ' Hab.idHabitacion, ' +
	    ' Hab.idHotel, ' +
      ' Hab.nombre,  ' +
      ' Hot.nombre AS nombreHotel, ' +
      ' Ciu.ciudad, ' +
      ' Ciu.latitud AS ciudadLatitud , ' +
      ' Ciu.longitud AS ciudadLongitud, ' +
      ' Pais.pais, ' +
      ' Pais.latitud AS paisLatitud, ' +
      ' Pais.longitud AS paisLongitud ' +
      ' FROM habitaciones AS Hab ' +
      ' INNER JOIN Hoteles AS Hot ' +
      ' 	ON Hot.idHotel = Hab.idHotel ' +
      'INNER JOIN Ciudades as Ciu ' +
      '	ON Ciu.idCiudad = Hot.idCiudad ' +
      'INNER JOIN Paises as Pais ' +
      '	ON Pais.idPais = Ciu.idPais ' +
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

router.get('/habitaciones/list/hotel/:idHotel', async (req, res) => {
  try {
    const idHotel = req.params.idHotel;
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
    ' WHERE Hab.idHotel = ? ' +
    ' GROUP BY Hab.idHabitacion;', [idHotel]);
    res.status(200).json(hoteles);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});


router.get('/habitaciones/list/filtros', async (req, res) => {
  try{
    // const idCategoria = req.query.idCategoriaHotel;
    // const precioMin = Number(req.query.precioMin);
    // const precioMax = Number(req.query.precioMax);
    // const calificacion = Number(req.query.calificacion);
    // const idCiudad = req.query.idCiudad;
    const idCategoriaHotel = req.query.idCategoriaHotel;
    const precioMin = req.query.precioMin;
    const precioMax = req.query.precioMax;
    const calificacion = req.query.calificacion;
    const idCiudad = req.query.idCiudad;

    let query = 'SELECT ' +
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
    ' 	ON Hab.idHotel = Hot.idHotel ';

    let groupBy = ' GROUP BY Hab.idHabitacion;';

    const conditions = [];
    const values = [];

    if (precioMin) {
      conditions.push(' Hab.precio >= ?');
      values.push(precioMin);
    }
    if (precioMax ) {
      conditions.push(' Hab.precio <= ?');
      values.push(precioMax);
    }
    if (idCategoriaHotel) {
      conditions.push(' Hot.idCategoriaHotel = ?');
      values.push(idCategoriaHotel);
    }
    if (calificacion) {
      conditions.push(' Hab.calificacion = ?');
      values.push(calificacion);
    }
    if (idCiudad) {
      conditions.push(' Hot.idCiudad = ?');
      values.push(idCiudad);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' GROUP BY Hab.idHabitacion;';

    const [habitaciones] = await conexionApi.query(query, values);
    res.status(200).json(habitaciones);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

router.get('/habitaciones/list/favorite/:idUsuario', async (req, res) => {
  try {
    const idUsuario = req.params.idUsuario;
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
    ' INNER JOIN Favoritos AS Fav ' +
    '	ON Fav.idHabitacion = Hab.idHabitacion ' +
    ' INNER JOIN Usuarios AS Usu ' +
    '	ON Usu.idUsuario = Fav.idUsuario ' +
    ' WHERE Usu.idUsuario = ? ' +
    ' GROUP BY Hab.idHabitacion;', [idUsuario]);
    res.status(200).json(hoteles);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

router.post('/habitaciones/saveFavorite', async (req, res) => {
  try {
    const idHabitacion = req.body.idHabitacion;
    const idUsuario = req.body.idUsuario;
    const newFavorito = {idHabitacion, idUsuario};
    await conexionApi.query('INSERT INTO Favoritos SET ?;', [newFavorito]);
    res.status(200).json({message: 'Favorito guardado'});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});



export default router;