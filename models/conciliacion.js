const { Schema, model } = require('mongoose');

const tipoPago = {
    values: ['CONTADO', 'ABONO', 'AFAVOR'],
    message: '{VALUE} no es un tipo de pago permitido'
}

const conciliacionSchema = Schema({

    idIngreso: {
        type: Schema.Types.ObjectId,
        ref: 'Ingreso',
        required: [true, 'Ingreso requerido']
    },
    idCargo: {
        type: Schema.Types.ObjectId,
        ref: 'Cargo',
        required: [true, 'Cargo requerido']
    },
    idCondomino: {
        type: Schema.Types.ObjectId,
        ref: 'Condomino',
        required: [true, 'Condomino requerido']
    },

    monto: { type: Number, required: [true, 'Cantidad requerida'] },
    tipo: {
        type: String,
        default: 'PAGO',
        required: [true, 'Tipo requerido'],
        enum: tipoPago
    },
    entidad: { type: String, required: false },
    concepto: { type: String, required: false },
    pagado: { type: Boolean, default: false, required: true },
    estatus: { type: Boolean, required: false },
    fecha: { type: Date, default: Date.now },

    fechaOperacion: { type: Date, default: Date.now },
    usuarioOperacion: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    ultimaOperacion: { type: Date, default: Date.now },
    estadoOperacion: { type: Boolean, default: true, required: false }

});

conciliacionSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Conciliacion', conciliacionSchema);