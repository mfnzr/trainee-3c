const {Router} = require('express');
const {getDevs, postDevs, patchDev, deleteDev} = require('../controllers/DevsController');
const {getDev} = require('../controllers/DevsController');

const router = Router();

router.get('/', getDevs);
router.get('/:id', getDev);
router.post('/', postDevs);
router.patch('/:id', patchDev);
router.delete('/:id', deleteDev)



module.exports = router;