const { Schema, model } = require('mongoose');

const fraccionamientoSchema = Schema({

    nick: { type: String, required: [true, 'Nombre requerido'] },
    nombre: { type: String, required: false },
    tipo: { type: String, required: false },
    viviendas: { type: Number, required: false },
    estado: { type: String, required: false },
    ciudad: { type: String, required: [true, 'Ciudad requerido'] },
    cp: { type: String, required: [true, 'Còdigo postal requerido'] },
    direccion: { type: String, required: false },
    correo: { type: String, unique: true, required: [true, 'Correo requerido'] },
    refencia: { type: String, required: false },

    fechaOperacion: { type: Date, default: Date.now },
    usuarioOperacion: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    ultimaOperacion: { type: Date, default: Date.now },
    estadoOperacion: { type: Boolean, default: true, required: false }

});

fraccionamientoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Ingreso', fraccionamientoSchema);