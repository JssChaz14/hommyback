const { Schema, model } = require('mongoose');

const familiarSchema = Schema({

    nombre: { type: String, required: [true, 'Nombre requerido'] },
    correo: { type: String, unique: true, required: [true, 'Correo requerido'] },
    telefono: { type: String, required: [true, 'Telèfono requerido'] },

    condomino: {
        type: Schema.Types.ObjectId,
        ref: 'Condomino',
        required: true
    },

    avatar: { type: String, required: false },
    role: { type: String, required: [true, 'Rol requerido'], default: 'FAMILIAR' },

    fechaOperacion: { type: Date, default: Date.now },
    usuariooperacion: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    ultimaOperacion: { type: Date, default: Date.now },
    estadoOperacion: { type: Boolean, default: true, required: false }

}, { collection: 'familiares' });

familiarSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Familiar', familiarSchema);