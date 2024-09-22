import conexionApi from "../conexion.js";
import { Router } from "express";

const router = Router();

router.get('/generos/list', async (req, res) => {
  try{
    const [generos] = await conexionApi.query('SELECT * FROM Generos');
    res.status(200).json(generos);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

export default router;