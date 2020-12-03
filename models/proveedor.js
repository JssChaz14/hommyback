const { Schema, model } = require('mongoose');

const proveedorSchema = Schema({

    nombrePorveedor: { type: String, required: [true, 'Nombre requerido'] },
    nombreContacto: { type: String, required: [true, 'Nombre del contacto requerido'] },
    telefono: { type: String, required: [true, 'Teléfono requerido'] },
    correo: { type: String, required: [true, 'Correo requerido'] },
    direccion: { type: String, required: false },
    razonSocial: { type: String, required: [true, 'Razón social requerido'] },
    rfc: { type: String, required: [true, 'RFC requerido'] },
    banco: { type: String, required: false },
    cuentaBancarea: { type: String, required: false },
    clabeBancarea: { type: String, required: false },
    telOficina: { type: String, required: [true, 'Teléfono de oficina requerido'] },
    TelMovil: { type: String, required: false },
    correoContacto: { type: String, required: false },

    fechaOperacion: { type: Date, default: Date.now },
    usuariooperacion: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    ultimaOperacion: { type: Date, default: Date.now },
    estadoOperacion: { type: Boolean, default: true, required: false }

}, { collection: 'proveedores' });

proveedorSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Proveedor', proveedorSchema);