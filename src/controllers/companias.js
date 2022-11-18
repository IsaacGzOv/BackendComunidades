const CompaniasCtr = {};
const connect = require('../../DBConexion');

CompaniasCtr.getCompanias = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM compania;');
    res.json(rows);
};

CompaniasCtr.getCompania = async (req, res) => {
    const idCompania = req.params.idCompania;
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM compania WHERE idCompania = ?', [
        idCompania
    ]);
    res.length !=0 ?
        res.json({
            obj: rows[0],
            ok: true
        }) :
        res.json({
            msg: 'No existe el registro con id' + idCompania,
            ok: false
        });
};

CompaniasCtr.createCompania = async (req, res) => {
    const Nombre = req.body.Nombre;
    const Ubicacion = req.body.Ubicacion;
    const Descripcion = req.body.Descripcion;
    const SitioWeb = req.body.SitioWeb;
    const Contacto = req.body.Contacto;
    const connection = await connect();

    const [results] = await connection.query('INSERT INTO Compania (Nombre, Ubicacion, Descripcion, SitioWeb, Contacto) VALUES (?,?,?,?,?)', [
        Nombre,
        Ubicacion,
        Descripcion,
        SitioWeb,
        Contacto
    ]);
    res.json({
        id: results.insertId,
        ...req.body
    });
};

module.exports = CompaniasCtr;