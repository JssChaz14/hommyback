const { Router, response } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const { getIngresos, crearIngresos, editarIngresos, eliminarIngresos } = require('../controllers/ingresos')

// const { getUsuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', getIngresos);

router.post('/', [], crearIngresos);

router.put('/:id', [], editarIngresos);

router.put('/borrar/:id', [], eliminarIngresos);

module.exports = router;