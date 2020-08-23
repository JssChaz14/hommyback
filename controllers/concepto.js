const { response } = require('express');

const Concepto = require('../models/concepto');


const getConcepto = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'lista Concepto'
    })
}

const crearConcepto = async(req, res = response) => {

    const uid = req.uid;

    const concepto = new Concepto({
        usuarioOperacion: uid,
        ...req.body
    });

    try {

        const conceptoDB = await concepto.save();

        res.json({
            ok: true,
            msg: 'crear concepto',
            concepto
        })

    } catch (err) {
        res.json({
            ok: false,
            msg: err
        })
    }
}

const editarConcepto = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Editar Concepto'
    })
}

const eliminarConcepto = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Eliminar Concepto'
    })
}

module.exports = { getConcepto, crearConcepto, editarConcepto, eliminarConcepto };