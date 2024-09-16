import conexion from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/reservaciones/list', async (req, res) => {
  const [reservaciones] = await conexion.query('SELECT * FROM reservaciones');
  res.json(reservaciones);
});

export default router;