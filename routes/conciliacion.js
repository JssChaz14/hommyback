const { Router, response } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const { addConciliacion, getConciliacion, crearConciliacion, editarConciliacion, eliminarConciliacion } = require('../controllers/conciliacion');

const router = Router();

router.get('/', getConciliacion);
router.post('/addConciliacion', addConciliacion);
router.post('/', [
        validarJWT,
        check('ingreso', 'Ingreso necesario').not().isEmpty(),
        check('cargo', 'Cargo necesario').not().isEmpty(),
        check('condomino', 'Condomino necesario').not().isEmpty(),
        check('monto', 'monto requerido').not().isEmpty(),
        check('tipo', 'Tipo de pago requerido').not().isEmpty(),
        validarCampos
    ],
    crearConciliacion
);

router.put('/:id', [], editarConciliacion);

router.put('/borrar/:id', [], eliminarConciliacion);

module.exports = router;