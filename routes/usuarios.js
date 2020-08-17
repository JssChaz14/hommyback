const { Router } = require('express');

const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { getUsuarios, crearUsuarios, actualizarUsuario, borrarUsuario } = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuarios);

router.post('/',
    check('nombre').not().isEmpty(),
    check('correo', 'correo obligatorio').isEmail(),
    validarCampos,
    crearUsuarios);

router.put('/:id',
    // validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'El email es obligatorio').isEmail(),
    // check('role', 'El role es obligatorio').not().isEmpty(),
    validarCampos,

    actualizarUsuario
);

router.delete('/:id',
    // validarJWT,
    borrarUsuario
);



module.exports = router;