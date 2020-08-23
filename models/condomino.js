const { Schema, model } = require('mongoose');

const condominoSchema = Schema({

    numeroCondomino: { type: Number, required: false },
    nombre: { type: String, required: [true, 'Nombre requerido'] },
    correo: { type: String, unique: true, required: [true, 'Correo requerido'] },
    telCasa: { type: String, required: false },
    telOficina: { type: String, required: false },
    celular: { type: String, required: [true, 'Celular requerido'] },
    manzana: { type: String, required: false },
    lote: { type: String, required: false },
    subLote: { type: String, required: false },
    referencias: { type: String, required: false },
    numeroCasa: { type: String, required: false },
    calle: { type: String, required: [true, 'Calle requerida'] },
    cuota: { type: String, required: false },
    tipo: { type: String, required: false },
    creado: { type: String, required: false, default: 'NO' },
    accesos: { type: String, required: false, default: false },

    avatar: { type: String, required: false },

    fechaOperacion: { type: Date, default: Date.now },
    usuarioOperacion: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    ultimaOperacion: { type: Date, default: Date.now },
    estadoOperacion: { type: Boolean, default: true, required: false }

}, { collection: 'condominos' });

condominoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Condomino', condominoSchema);