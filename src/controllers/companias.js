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

CompaniasCtr.deleteCompania = async (req, res) => {
    const idCompania = req.params.idCompania;
    const connection = await connect();
    const result = await connection.query('DELETE FROM Compania WHERE idCompania = ?', [idCompania]);
    result[0].affectedRows != 0 ?
        res.json({
            msg: 'Registro eliminado con exito',
            ok: true
        }) :
        res.json({
            msg: 'Error al eliminar...',
            ok: false
        });
};

CompaniasCtr.updateCompania = async (req, res) => {
    const idCompania = req.params.idCompania;
    const connection = await connect();
    const result = await connection.query('UPDATE Compania SET ? WHERE idCompania = ?', [
        req.body,
        idCompania
    ]);
    result[0].affectedRows === 0 ?
        res.json({
            msg: "Error al modificar...",
            ok: false
        }) :
        res.json({
            msg: "Registro modificado con exito",
            ok: true
        });
};

module.exports = CompaniasCtr;