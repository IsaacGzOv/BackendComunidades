const dotenv = require('dotenv');
dotenv.config();
// const conexion = require('./DBConexion');
const MainServer = require('./src/MainServer/mainServer');

const mainServer = new MainServer(process.env.PORT);