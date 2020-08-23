const { Schema, model } = require('mongoose');

const cargoSchema = Schema({

    anio: { type: String, required: [true, 'Año requerido'] },
    mes: { type: String, required: [true, 'Mes requerido'] },
    dia: { type: String, required: false },
    estatus: { type: Boolean, required: false },
    fecha: { type: Date, required: false },
    tipoCargo: { type: String, required: [true, 'Tipo cargo requerido'], default: 'CONDOMINO' },
    monto: { type: Number, required: [true, 'Cantidad requerida'] },
    nuevoMonto: { type: Number, required: false },
    interes: { type: Number, required: false },

    idCondomino: {
        type: Schema.Types.ObjectId,
        ref: 'Condomino',
        required: [true, 'Condmomino requerido']
    },
    idConcepto: {
        type: Schema.Types.ObjectId,
        ref: 'Concepto',
        required: [true, 'Concepto requerido']
    },

    fechaOperacion: { type: Date, default: Date.now },
    usuarioOperacion: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    ultimaOperacion: { type: Date, default: Date.now },
    estadoOperacion: { type: Boolean, default: true, required: false }

});

cargoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Cargo', cargoSchema);