import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/habitaciones/list', async (req, res) => {
  const [habitaciones] = await conexionApi.query('SELECT * FROM habitaciones');
  res.json(habitaciones);
});

export default router;