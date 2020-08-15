const { Router } = require('express');

const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { getUsuarios, crearUsuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuarios);

router.post('/',
    check('nombre').not().isEmpty(),
    check('correo', 'correo obligatorio').isEmail(),
    validarCampos,
    crearUsuarios)


module.exports = router;