import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/paises/list', async (req, res) => {
  try {
    const [paises] = await conexionApi.query('SELECT * FROM paises');
    res.status(200).json(paises);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

export default router;