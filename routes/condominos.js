const { Router, response } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const { getCondominos, crearCondominos, editarCondominos, eliminarCondominos } = require('../controllers/condominos')

// const { getUsuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', getCondominos);

router.post('/', [
    validarJWT,
    check('nombre', 'Nombre reqerido').not().isEmpty(),
    check('calle', 'Calle reqerido').not().isEmpty(),
    check('celular', 'Celular reqerido').not().isEmpty(),
    check('correo', 'Correo reqerido y en formato correo').isEmail(),

    validarCampos
], crearCondominos);

router.put('/:id', [
        validarJWT,
        check('nombre', 'El nombre del condomino es necesario').not().isEmpty(),
        validarCampos
    ],
    editarCondominos
);

router.put('/borrar/:id', [], eliminarCondominos);

module.exports = router;