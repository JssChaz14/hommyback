const { response } = require('express');
const Ingreso = require('../models/ingreso');


const getIngresos = async(req, res = response) => {

    const ingresos = await Ingreso.find({});

    res.json({
        ok: true,
        msg: 'lista Ingresos',
        ingresos
    })
}

const detalleIngresos = async(req, res = response) => {
    var id = req.params.id;

    Ingreso.findById(id)
        .where('estatus').equals(true)
        .exec((err, ingresoEspecifico) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar Ingreso especifico',
                    errors: err
                });
            }
            if (!ingresoEspecifico) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'El Ingreso con ID ' + id + ' no existe.',
                    errors: { message: 'No existe el Ingreso con ese ID ' }
                });
            }
            res.status(200).json({
                ok: true,
                ingresoEspecifico
            });
        });

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
    var id = req.params.id;
    var body = req.body;

    Ingreso.findById(id, (err, ingresoEncontrado) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'error al buscar el ingreso',
                errors: err
            });
        }
        if (!ingresoEncontrado) {
            return res.status(400).json({
                ok: false,
                mensaje: 'El ingreso con ID ' + id + ' no existe',
                errors: { message: 'No existe el ingreso con ese ID ' }
            });
        }

        ingresoEncontrado.monto = body.monto;

        ingresoEncontrado.save((err, ingresoActualizado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'error al actualizar el ingreso',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                ingresoActualizado
            });
        });

    });
}

const eliminarIngresos = (req, res = response) => {
    var id = req.params.id;

    Ingreso.findById(id, 'estatus', (err, ingresoEncontrado) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'error al buscar el ingreso',
                errors: err
            });
        }
        if (!ingresoEncontrado) {
            return res.status(400).json({
                ok: false,
                mensaje: 'El ingreso con ID ' + id + ' no existe',
                errors: { message: 'No existe el ingreso con ese ID ' }
            });
        }

        ingresoEncontrado.estatus = false;

        ingresoEncontrado.save((err, ingresoActualizado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'error al actualizar el ingreso',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                ingresoActualizado
            });
        });

    });
}

module.exports = { getIngresos, detalleIngresos, crearIngresos, editarIngresos, eliminarIngresos };