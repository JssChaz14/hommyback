const { response } = require('express');
const bcrypt = require('bcryptjs');

const { validationResult } = require('express-validator');

const Usuario = require('../models/usuario');


const getUsuarios = async(req, res) => {
    const usuarios = await Usuario.find({}, 'nombre correo nick password');
    res.json({
        ok: true,
        usuarios
    });
}

const crearUsuarios = async(req, res) => {

    const { correo, password } = req.body;

    try {

        const email = await Usuario.findOne({ correo })

        if (email) {
            return res.status(400).json({
                ok: false,
                msg: 'Correo ya existe'
            })
        }

        const usuario = new Usuario(req.body);

        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

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

const actualizarUsuario = async(req, res = response) => {

    // TODO: Validar token y comprobar si es el usuario correcto

    const uid = req.params.id;

    try {

        const usuarioDB = await Usuario.findById(uid);

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario por ese id'
            });
        }

        // Actualizaciones
        const { password, google, correo, ...campos } = req.body;

        if (usuarioDB.correo !== correo) {

            const existeEmail = await Usuario.findOne({ correo });
            if (existeEmail) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un usuario con ese email'
                });
            }
        }

        campos.correo = correo;
        const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, { new: true });

        res.json({
            ok: true,
            usuario: usuarioActualizado
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }

}

const borrarUsuario = async(req, res = response) => {

    const uid = req.params.id;

    try {

        const usuarioDB = await Usuario.findById(uid);

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario por ese id'
            });
        }

        await Usuario.findByIdAndDelete(uid);


        res.json({
            ok: true,
            msg: 'Usuario eliminado'
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });

    }


}

module.exports = { getUsuarios, crearUsuarios, actualizarUsuario, borrarUsuario };