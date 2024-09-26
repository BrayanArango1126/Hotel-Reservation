import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/categorias_hoteles/list', async (req, res) => {
  try{
    const [categorias_hoteles] = await conexionApi.query('SELECT idCategoriaHotel, categoria FROM categorias_hoteles');
    res.status(200).json(categorias_hoteles);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

router.get('/categorias_hoteles/list/section', async (req, res) => {
  const [categorias_hoteles] = await conexionApi.query('SELECT * FROM categorias_hoteles');
  res.json(categorias_hoteles);
});

export default router;