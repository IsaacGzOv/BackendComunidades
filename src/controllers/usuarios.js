const UsuariosCtr = {};
const connect = require('../../DBConexion');

UsuariosCtr.getUsuarios = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM usuarios;');
    res.json(rows);
};

UsuariosCtr.getUsuario = async (req, res) => {
    const idUsuario = req.params.idUsuario;
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM usuarios WHERE idUsuario = ?', [
        idUsuario
    ]);
    res.length != 0 ?
        res.json({
            obj: rows[0],
            ok: true
        }) :
        res.json({
            msg: 'No existe registros',
            ok: false
        });
}

UsuariosCtr.createUsuario = async (req, res) => {
    const Nombre = req.body.Nombre;
    const Apellido = req.body.Apellido;
    const Correo = req.body.Correo;
    const Contrasena = req.body.Contrasena;
    const Curp = req.body.Curp;
    const Telefono = req.body.Telefono;

    const connection = await connect();
    const [results] = await connection.query('INSERT INTO Usuarios (Nombre, Apellido, Correo, Contrasena, Curp, Telefono) VALUES (?,?,?,?,?,?)',[
        Nombre,
        Apellido,
        Correo,
        Contrasena,
        Curp,
        Telefono
    ]);
    res.json({
        id: results.insertId,
        ...req.body
    });
}

module.exports = UsuariosCtr;