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

const editarCondominos = async(req, res = response) => {

    const id = req.params.id;
    const uid = req.uid;

    try {

        const condomino = await Condomino.findById(id);

        if (!condomino) {
            return res.status(404).json({
                ok: true,
                msg: 'Condomino no encontrado'
            })
        }

        const condominoEditado = {
            ...req.body,
            usuarioOperacion: uid
        }

        const condominoActualizado = await Condomino.findByIdAndUpdate(id, condominoEditado, { new: true });

        res.json({
            ok: true,
            msg: 'Editar condominos',
            condominoActualizado
        })

    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const eliminarCondominos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Eliminar condominos'
    })
}


module.exports = { getCondominos, crearCondominos, editarCondominos, eliminarCondominos };