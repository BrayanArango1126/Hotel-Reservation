import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/hoteles/list', async (req, res) => {
  const [hoteles] = await conexionApi.query('SELECT * FROM hoteles');
  res.json(hoteles);
});

export default router;