const { response } = require('express');
const Ingreso = require('../models/ingreso');


const getIngresos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'lista Ingresos'
    })
}

const crearIngresos = async(req, res = response) => {

    const uid = req.uid;

    const ingreso = new Ingreso({
        usuarioOperacion: uid,
        ...req.body
    });

    try {

        const ingresoDB = await ingreso.save();

        res.json({
            ok: true,
            msg: 'crear ingreso',
            ingresoDB
        })

    } catch (err) {
        res.json({
            ok: false,
            msg: err
        })
    }

}

const editarIngresos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Editar Ingresos'
    })
}

const eliminarIngresos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Eliminar Ingresos'
    })
}

module.exports = { getIngresos, crearIngresos, editarIngresos, eliminarIngresos };