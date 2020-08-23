const { Router, response } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const { getCargos, crearCargos, editarCargos, eliminarCargos } = require('../controllers/cargos')

// const { getUsuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', getCargos);

router.post('/', [
    validarJWT,
    check('anio', 'Año reqerido').not().isEmpty(),
    check('mes', 'Mes reqerido').not().isEmpty(),
    check('monto', 'Monto reqerido').not().isEmpty(),
    check('idCondomino', 'Condomino necesario').not().isEmpty(),
    check('idConcepto', 'Concepto necesario').not().isEmpty(),
    validarCampos
], crearCargos);

router.put('/:id', [], editarCargos);

router.put('/borrar/:id', [], eliminarCargos);

module.exports = router;