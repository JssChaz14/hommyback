const { Router, response } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const { getIngresos, crearIngresos, editarIngresos, eliminarIngresos } = require('../controllers/ingresos')

// const { getUsuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', getIngresos);

router.post('/', [
    validarJWT,
    check('fecha', 'fecha reqerido').not().isEmpty(),
    check('monto', 'monto reqerido').not().isEmpty(),
    check('referencia', 'referencia reqerido').not().isEmpty(),
    check('estatus', 'estatus reqerido').not().isEmpty(),

    validarCampos
], crearIngresos);

router.put('/:id', [], editarIngresos);

router.put('/borrar/:id', [], eliminarIngresos);

module.exports = router;