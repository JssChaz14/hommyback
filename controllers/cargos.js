const { response } = require('express');

const Cargo = require('../models/cargo');

const getCargos = async(req, res = response) => {

    const cargos = await Cargo.find({})
        .populate('concepto', 'concepto monto')
        .populate('condomino', 'nombre correo')

    res.json({
        ok: true,
        cargos
    });

}

const crearCargos = async(req, res = response) => {

    const uid = req.uid;

    const cargo = new Cargo({
        usuarioOperacion: uid,
        ...req.body
    });

    try {

        const cargoDB = await cargo.save();

        res.json({
            ok: true,
            msg: 'cargo creado',
            cargoDB
        })

    } catch (err) {
        res.json({
            ok: false,
            msg: err
        })
    }

}

const editarCargos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Editar Cargos'
    })
}

const eliminarCargos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Eliminar Cargos'
    })
}


module.exports = { getCargos, crearCargos, editarCargos, eliminarCargos };