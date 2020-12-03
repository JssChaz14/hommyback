const { response } = require('express');

const Condomino = require('../models/condomino');

const getCondominos = async(req, res = response) => {

    const condominos = await Condomino.find({});

    res.json({
        ok: true,
        msg: 'lista condominos',
        condominos
    })
}

const crearCondominos = async(req, res = response) => {
    const uid = req.uid;
    console.log(uid);
    const condomino = new Condomino({
        usuarioOperacion: uid,
        ...req.body
    });

    try {

        const condominoDB = await condomino.save();

        res.json({
            ok: true,
            msg: 'crear condominos',
            condominoDB
        })

    } catch (err) {
        res.json({
            ok: false,
            msg: err
        })
    }

}

const editarCondominos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Editar condominos'
    })
}

const eliminarCondominos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Eliminar condominos'
    })
}


module.exports = { getCondominos, crearCondominos, editarCondominos, eliminarCondominos };