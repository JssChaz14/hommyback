const { Schema, model } = require('mongoose');

const egresoSchema = Schema({

    fecha: { type: Date, required: [true, 'Fecha requerida'] },
    monto: { type: Number, required: [true, 'Cantidad requerida'] },
    concepto: { type: String, required: [true, 'Concepto requerido'] },
    formaPago: { type: String, required: [true, 'Forma de pago requerido'], default: 'EFECTIVO' },
    referenciaPago: { type: String, required: false },

    proveedor: {
        type: Schema.Types.ObjectId,
        ref: 'Proveedor',
        required: [false, 'Proveedor requerido']
    },

    otro: { type: String, required: false },
    otroBeneficiario: { type: String, required: false },
    mes: { type: String, required: false },

    fechaOperacion: { type: Date, default: Date.now },
    usuariooperacion: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    ultimaOperacion: { type: Date, default: Date.now },
    estadoOperacion: { type: Boolean, default: true, required: false }

}, { collection: 'egresos' });

egresoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Egreso', egresoSchema);