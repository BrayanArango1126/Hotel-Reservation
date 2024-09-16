import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/actividades/list', async (req, res) => {
  const [actividades] = await conexionApi.query('SELECT * FROM actividades');
  res.json(actividades);
});

export default router;