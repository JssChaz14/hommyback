const { Schema, model } = require('mongoose');

const opcionesPeriodicidad = {
    values: ['Mes', 'Bimestral', 'Año'],
    message: '{VALUE} opción no valida'
};

const conceptoSchema = Schema({

    concepto: { type: String, required: [true, 'Concepto requerido'] },
    monto: { type: Number, required: [true, 'Cantidad requerida'] },
    periodicidad: {
        type: String,
        required: [true, 'Periodicidad requerido'],
        enum: opcionesPeriodicidad
    },

    fechaOperacion: { type: Date, default: Date.now },
    usuarioOperacion: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    ultimaOperacion: { type: Date, default: Date.now },
    estadoOperacion: { type: Boolean, default: true, required: false },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario"
    }

}, { collection: 'conceptos' });

conceptoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Concepto', conceptoSchema);