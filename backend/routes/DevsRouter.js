const {Router} = require('express');
const {getDevs, postDevs} = require('../controllers/DevsController');
const {getDev} = require('../controllers/DevsController');

const router = Router();

router.get('/', getDevs);
router.get('/:id', getDev);
router.post('/', postDevs);

router.patch('/', (req, res) => {
    res.send('vc fez uma req PATCH!');
});

router.delete('/', (req, res) => {
    res.send('vc fez uma req DELETE!');
});

module.exports = router;