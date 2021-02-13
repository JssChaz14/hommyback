const { response } = require('express');
const { find } = require('../models/concepto');

const Concepto = require('../models/concepto');

const getConcepto = async(req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [conceptos, total] = await Promise.all([
        Concepto
        .find({})
        .populate('usuario', 'nombre')
        .skip(desde)
        .limit(5),

        Concepto.countDocuments({}, function(err, count) {
            if (err) {
                console.log(err)
            } else {
                console.log("Count :", count)
            }
        })

    ]);

    res.json({
        ok: true,
        conceptos,
        total,
        msg: 'lista Concepto'
    })
}

const crearConcepto = async(req, res = response) => {
    console.log(req.body)
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

const editarConcepto = async(req, res = response) => {
    const id = req.params.id
    const uid = req.uid
    try {
        const concepto = await Concepto.findById(id);

        if (!concepto) {
            return res.status(404).json({
                ok: true,
                msg: 'Concepto no encontrado'
            })
        }

        const nuevoConcepto = {
            ...req.body,
            usuario: uid
        }

        const conceptoActualizado = await Concepto.findByIdAndUpdate(id, nuevoConcepto, { new: true })

        res.json({
            ok: true,
            msg: 'Concepto actualizado',
            concepto: conceptoActualizado
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al editar'
        })

    }

}

const eliminarConcepto = async(req, res = response) => {

    const id = req.params.id
    const uid = req.uid
    try {
        const concepto = await Concepto.findById(id);

        if (!concepto) {
            return res.status(404).json({
                ok: true,
                msg: 'Concepto no encontrado'
            })
        }



        await Concepto.findOneAndDelete(id)

        res.json({
            ok: true,
            msg: 'Concepto eliminado'
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al borrar'
        })

    }
}

module.exports = { getConcepto, crearConcepto, editarConcepto, eliminarConcepto };