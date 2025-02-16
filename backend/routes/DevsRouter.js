const {Router} = require('express');
const {getDevs} = require('../controllers/DevsController');

const router = Router();

router.get('/', getDevs);

router.post('/', (req, res) => {
    res.send('vc fez uma req post!');
});

router.patch('/', (req, res) => {
    res.send('vc fez uma req PATCH!');
});

router.delete('/', (req, res) => {
    res.send('vc fez uma req DELETE!');
});

module.exports = router;