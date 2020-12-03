const { Schema, model } = require('mongoose');

const ingresoSchema = Schema({

    fecha: { type: Date, required: true },
    monto: { type: Number, required: [true, 'Cantidad requerida'] },
    referencia: { type: String, required: true },
    estatus: { type: Boolean, required: true },

    fechaOperacion: { type: Date, default: Date.now },
    usuariooperacion: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    ultimaOperacion: { type: Date, default: Date.now },
    estadoOperacion: { type: Boolean, default: true, required: false }

}, { collection: 'ingresos' });

ingresoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Ingreso', ingresoSchema);