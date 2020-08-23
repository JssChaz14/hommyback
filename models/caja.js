const { Schema, model } = require('mongoose');

const cajaSchema = Schema({

    concepto: { type: String, required: [true, 'Concepto requerido'] },
    referencia: { type: String, required: [true, 'Referencia requerida'] },
    ingreso: { type: Number, required: false },
    egreso: { type: Number, required: false },
    aux: { type: String, required: false },
    estatus: { type: Boolean, required: false },

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

module.exports = model('Caja', cajaSchema);