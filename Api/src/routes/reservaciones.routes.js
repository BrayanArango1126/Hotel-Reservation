import conexionApi from "../conexion.js";
import e, { Router } from "express";

const router = Router();

router.get('/reservaciones/list', async (req, res) => {
  const [reservaciones] = await conexionApi.query('SELECT * FROM reservas');
  res.json(reservaciones);
});

router.post('/reservaciones/create', async (req, res) => {
  try{
    const {fecha_inicio, hora_inicio, fecha_fin, hora_fin, total, idHotel, idHabitacion, idUsuario} = req.body;
    const newReservacion = {
      fecha_inicio,
      hora_inicio,
      fecha_fin,
      hora_fin,
      total,
      idHotel,
      idHabitacion,
      idUsuario
    };
    const [reservaciones] = await conexionApi.query('INSERT INTO reservas SET ?', [newReservacion]);
    res.status(200).json({message: "Reservación agregada correctamente"});
  }catch(error){
    res.status(500).json({error: error.message});
  }
});

export default router;