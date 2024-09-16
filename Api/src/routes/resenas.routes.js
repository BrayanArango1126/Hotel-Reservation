import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/resenas/list', async (req, res) => {
  const [resenas] = await conexionApi.query('SELECT * FROM resenas');
  res.json(resenas);
});

export default router;