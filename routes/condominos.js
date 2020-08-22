const { Router, response } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const { getCondominos, crearCondominos, editarCondominos, eliminarCondominos } = require('../controllers/condominos')

// const { getUsuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', getCondominos);

router.post('/', [], crearCondominos);

router.put('/:id', [], editarCondominos);

router.put('/borrar/:id', [], eliminarCondominos);

module.exports = router;