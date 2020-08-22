const { response } = require('express')

const getConcepto = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'lista Concepto'
    })
}

const crearConcepto = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'crear Concepto'
    })
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