const { response } = require('express');
const { validationResult } = require('express-validator');

const Usuario = require('../models/usuario');


const getUsuarios = async(req, res) => {
    const usuarios = await Usuario.find({}, 'nombre correo nick');
    res.json({
        ok: true,
        usuarios
    });
}

const crearUsuarios = async(req, res) => {

    const { nombre, correo, password } = req.body;

    try {

        const email = await Usuario.findOne({ correo })

        if (email) {
            return res.status(400).json({
                ok: false,
                msg: 'Correo ya existe'
            })
        }

        const usuario = new Usuario(req.body);
        await usuario.save();

        res.json({
            ok: true,
            usuario
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Error, revisar logs'
        })
    }

}

module.exports = { getUsuarios, crearUsuarios };