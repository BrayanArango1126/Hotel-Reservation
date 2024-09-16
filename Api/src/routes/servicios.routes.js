import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/servicios/list', async (req, res) => {
  const [servicios] = await conexionApi.query('SELECT * FROM servicios');
  res.json(servicios);
});

export default router;