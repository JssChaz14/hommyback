const { Router, response } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const { getConcepto, crearConcepto, editarConcepto, eliminarConcepto } = require('../controllers/concepto')

// const { getUsuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', getConcepto);

router.post('/', [
    // validarJWT,
    check('concepto', 'concepto reqerido').not().isEmpty(),
    check('monto', 'monto reqerido').not().isEmpty(),
    check('periodicidad', 'periodicidad reqerido').not().isEmpty(),

    // validarCampos
], crearConcepto);

router.put('/:id', [], editarConcepto);

router.delete('/borrar/:id', [], eliminarConcepto);

module.exports = router;