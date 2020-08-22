const { response } = require('express')

const getCargos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'lista Cargos'
    })
}

const crearCargos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'crear Cargos'
    })
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