const express = require('express');
const Usuarios = require('../controllers/usuarios');
const router = express.Router();

router.get('/get-usuarios', Usuarios.getUsuarios);
router.get('/get-usuario/:idUsuario', Usuarios.getUsuario);
router.post('/create-usuario', Usuarios.createUsuario);
router.delete('/delete-usuario/:idUsuario', Usuarios.deleteUsuario);


module.exports = router;