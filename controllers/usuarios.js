const Usuario = require('../models/usuario');


const getUsuarios = (req, res) => {
    res.json({
        ok: true,
        msg: 'get usuarios'
    });
}

const crearUsuarios = async(req, res) => {

    const { nombre, correo, password } = req.body;
    const usuario = new Usuario(req.body);

    await usuario.save();

    res.json({
        ok: true,
        usuario
    });

}

module.exports = { getUsuarios, crearUsuarios };