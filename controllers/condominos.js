const { response } = require('express')

const getCondominos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'lista condominos'
    })
}

const crearCondominos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'crear condominos'
    })
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