const { Router, response } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const { getConcepto, crearConcepto, editarConcepto, eliminarConcepto } = require('../controllers/concepto')

// const { getUsuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', getConcepto);

router.post('/', [], crearConcepto);

router.put('/:id', [], editarConcepto);

router.put('/borrar/:id', [], eliminarConcepto);

module.exports = router;