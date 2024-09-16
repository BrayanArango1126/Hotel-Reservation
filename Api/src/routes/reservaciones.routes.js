import conexionApi from "../conexion.js";
import e, { Router } from "express";

const router = Router();

router.get('/reservaciones/list', async (req, res) => {
  const [reservaciones] = await conexionApi.query('SELECT * FROM reservaciones');
  res.json(reservaciones);
});

export default router;