const {Router} = require('express');
const router = Router();
const {check} = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRolValido, emailExiste, existeUsuarioId } = require('../helpers/db-validators');

const {getUsuario, putUsuarios, postUsuarios, deleteUsuarios} = require('../controllers/user');

router.get('/', getUsuario);
router.put('/:id',[
    check('id','No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioId),
    check('rol').custom(esRolValido),
    validarCampos
] ,putUsuarios);
router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({min: 6}),
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom(emailExiste),
    check('rol').custom(esRolValido),
    validarCampos
] ,postUsuarios);
router.delete('/:id',[
    check('id','No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioId),
    validarCampos
] ,deleteUsuarios);


module.exports = router;