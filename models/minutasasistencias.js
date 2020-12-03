const { Schema, model } = require('mongoose');

const minutasasistencias = Schema({

    condominos: {
        type: Schema.Types.ObjectId,
        ref: 'Condomino',
        required: false
    },
    asistio: { type: Boolean, required: false },
    fecha: { type: Date, default: Date.now },

    fechaOperacion: { type: Date, default: Date.now },
    usuariooperacion: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    ultimaOperacion: { type: Date, default: Date.now },
    estadoOperacion: { type: Boolean, default: true, required: false }

}, { collection: 'minutasasistencias' });

minutasasistencias.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Asistencias', minutasasistencias);