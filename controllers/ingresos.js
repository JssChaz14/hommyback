const { response } = require('express')

const getIngresos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'lista Ingresos'
    })
}

const crearIngresos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'crear Ingresos'
    })
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