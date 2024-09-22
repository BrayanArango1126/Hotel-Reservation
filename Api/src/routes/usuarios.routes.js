import conexionApi from "../conexion.js";
import { Router } from "express";
import jwt from 'jsonwebtoken';
import { token } from "morgan";

const router = Router();

router.get('/usuarios/list', async (req, res) => {
  const [usuarios] = await conexionApi.query('SELECT * FROM usuarios');
  res.json(usuarios);
});

router.get('/usuarios/:idUsuario', async (req, res) => {
  const { idUsuario } = req.params;
  const [usuarios] = await conexionApi.query('SELECT * FROM usuarios WHERE idUsuario = ?', [idUsuario]);
  res.json(usuarios);
});

router.put('/usuarios/update/:idUsuario', async (req, res) => {
  try{
    const { idUsuario } = req.params;
    const { nombres, apellidos, idGenero, telefono, direccion, correo, contrasena, idCiudad } = req.body;
    const updateUser = { nombres, apellidos, idGenero, telefono, direccion, correo, contrasena, idCiudad };
    await conexionApi.query('UPDATE usuarios SET ? WHERE idUsuario = ?', [updateUser, idUsuario]);
    res.status(200).json({message: 'Usuario actualizado correctamente'});
  }catch(err){
    res.json({message: err.message});
  }
});

router.delete('/usuarios/delete/:idUsuario', async (req, res) => {
  try{
    const { idUsuario } = req.params;
    await conexionApi.query('DELETE FROM usuarios WHERE idUsuario = ?', [idUsuario]);
    res.status(200).json({message: 'Usuario eliminado correctamente'});
  }catch(err){
    res.json({message: err.message});
  }
});

router.post('/usuarios/register', async (req, res) => {
  try{
    const { nombres, apellidos, idGenero, telefono, direccion, correo ,contraseña, idCiudad } = req.body;
    const newUser = { nombres, apellidos, idGenero, telefono, direccion, correo, contraseña, idCiudad };
    await conexionApi.query('INSERT INTO usuarios SET ?', [newUser]);
    res.status(200).json({message: 'Usuario agregado correctamente'});
  }catch(err){
    res.json({message: err.message});
  }
});

router.post('/usuarios/login', async (req, res) => {
  try{
    const { correo, contraseña } = req.body;
    const [usuarios] = await conexionApi.query('SELECT idUsuario, correo, contraseña FROM usuarios WHERE correo = ? AND contraseña = ?', [correo, contraseña]);
    if(usuarios.length > 0){
      res.status(201).json({message: 'Usuario logueado correctamente', token: createTokeb(usuarios[0]), idUsuario: usuarios[0].idUsuario});
    }else{
      res.status(200).json({message: 'Usuario no encontrado'});
    }
  }catch(err){
    res.json({message: err.message});
  }
});

function createTokeb(user){
  const payload = {
    usuarioId: user.idUsuario
  }
  return jwt.sign(payload, 'secretKey ', {expiresIn: '1h'});
}

export default router;