const { response } = require('express');

// const Conciliacion = require('../models/conciliacion');
const Cargos = require('../models/cargo');
const Conciliacion = require('../models/conciliacion');

const addConciliacion = async(req, res = response) => {
    console.log(req.body)

    const uid = req.uid;
    const conciliar = new Conciliacion({
        usuarioOperacion: uid,
        ...req.body
    });

    try {

        const conceptoDB = await conciliar.save();

        res.json({
            ok: true,
            msg: 'crear conciliar',
            conciliar
        })

    } catch (err) {
        res.json({
            ok: false,
            msg: err
        })
    }
}


const getConciliacion = async(req, res = response) => {

    const conciliados = await Conciliacion
        .find({})
        .populate('idCondomino')
        // const conciliados = await Conciliacion.find({});

    res.json({
        ok: true,
        msg: 'lista conciliados',
        conciliados
    })


}

const crearConciliacion = async(req, res = response) => {

    const uid = req.uid;

    const conciliacion = new Conciliacion({
        usuarioOperacion: uid,
        ...req.body
    });
    const idCargo = req.body.idCargo;

    /*
        seleccionar * from cargo where idCargo = idCargo (monto)
        seleccionar * from conciliacion where idCargo = req.body.idCargo && status != true
            ==lista== montos < monto, seguir conciliando else monto pagado (collecion pagados), montos > 

    */
    console.log(idCargo)

    const cargosDoc = await Cargos.findOne({ idCargo })
    const conciliacionDoc = await Cargos.findOne({ idConciliacion })
    const ingresoDoc = await Cargos.findOne({ idIngreso })



    // req.body.monto
    validarMonto = 1;
    if (validarMonto > 'cargo') {
        // saldo a favor
    } else {
        // abono del cargo
    }
    // console.log(validarMonto)

    try {

        // const conciliacionDB = await conciliacion.save();

        res.json({
            ok: true,
            msg: 'crear conciliacion',
            conciliacion
        })

    } catch (err) {
        res.json({
            ok: false,
            msg: err
        })
    }
}

const editarConciliacion = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Editar Concepto'
    })
}

const eliminarConciliacion = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Eliminar Concepto'
    })
}

module.exports = { addConciliacion, getConciliacion, crearConciliacion, editarConciliacion, eliminarConciliacion };