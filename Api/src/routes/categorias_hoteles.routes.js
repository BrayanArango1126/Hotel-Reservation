import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/categorias_hoteles/list', async (req, res) => {
  const [categorias_hoteles] = await conexionApi.query('SELECT * FROM categorias_hoteles');
  res.json(categorias_hoteles);
});

router.get('/categorias_hoteles/list/section', async (req, res) => {
  const [categorias_hoteles] = await conexionApi.query('SELECT * FROM categorias_hoteles');
  res.json(categorias_hoteles);
});

export default router;