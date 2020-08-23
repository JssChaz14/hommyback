const { Schema, model } = require('mongoose');

const minutasSchema = Schema({

    titulo: { type: String, required: [true, 'Título requerido'] },
    fecha: { type: Date, required: false },
    tipo: { type: String, required: [true, 'Tipo requerido'] },
    contenido: { type: String, required: false },
    cantiadadAsistentes: { type: String, required: false },

    fechaOperacion: { type: Date, default: Date.now },
    usuarioOperacion: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    ultimaOperacion: { type: Date, default: Date.now },
    estadoOperacion: { type: Boolean, default: true, required: false }

});

minutasSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Minutas', minutasSchema);