import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/usuarios/list', async (req, res) => {
  const [usuarios] = await conexionApi.query('SELECT * FROM usuarios');
  res.json(usuarios);
});

export default router;