const { Schema, model } = require('mongoose');

const adeudosSchema = Schema({
    cargo: {
        type: Schema.Types.ObjectId,
        ref: 'Cargo',
        required: [true, 'Cargo requerido']
    },
    condomino: {
        type: Schema.Types.ObjectId,
        ref: 'Condomino',
        required: [true, 'Condomino requerido']
    },
    estatus: { type: Boolean, required: false },
    fecha: { type: Date, default: Date.now },

    fechaOperacion: { type: Date, default: Date.now },
    usuariooperacion: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    ultimaOperacion: { type: Date, default: Date.now },
    estadoOperacion: { type: Boolean, default: true, required: false }
}, { collection: 'adeudos' });

cargoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Adeudos', adeudosSchema);