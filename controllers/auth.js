const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');


const login = async(req, res = response) => {

    const { correo, password } = req.body;
    console.log(correo, password);
    try {

        // Verificar email
        const usuarioDB = await Usuario.findOne({ correo });

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Datos incorrectos'
            });
        }
        console.log(usuarioDB)

        // Verificar contraseña
        const validPassword = bcrypt.compareSync(password, usuarioDB.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Datos incorrectos.'
            });
        }

        const token = await generarJWT(usuarioDB.id);

        res.json({
            ok: true,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

module.exports = {
    login
}