const { Schema, model } = require('mongoose');

const usuarioSchema = Schema({

    idCondomino: { type: String, required: [true, 'Condomino requerido'] },

    nick: { type: String, required: [true, 'Nick requerido'] },
    nombre: { type: String, required: [true, 'Nombre requerido'] },
    correo: { type: String, unique: true, required: [true, 'Correo requerido'] },
    password: { type: String, required: [true, 'Contraseña requerida'] },

    ciudad: { type: String, required: [true, 'Ciudad requerido'] },
    cp: { type: String, required: [true, 'Código postal requerido'] },
    direccion: { type: String, require: false },

    avatar: { type: String, required: false },
    role: { type: String, required: [true, 'Rol requerido'], default: 'CONDOMINO' },

    fechaOperacion: { type: Date, default: Date.now },
    usuarioOperacion: {
        type: Schema.Types.ObjectId,
        ref: 'Condomino',
        required: false
    },
    ultimaOperacion: { type: Date, default: Date.now },
    estadoOperacion: { type: Boolean, default: true, required: false }
});

module.exports = model('Usuario', usuarioSchema);