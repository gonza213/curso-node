const {Router} = require('express');
const router = Router();
const {getUsuario, putUsuarios, postUsuarios, deleteUsuarios} = require('../controllers/user');

router.get('/', getUsuario);
router.put('/:id', putUsuarios);
router.post('/', postUsuarios);
router.delete('/', deleteUsuarios);


module.exports = router;