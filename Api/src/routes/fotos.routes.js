import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();


router.get('/fotos/list', async (req, res) => {
  const [fotos] = await conexionApi.query('SELECT * FROM fotos');
  res.json(fotos);
});

export default router;