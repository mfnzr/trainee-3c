const {Router} = require('express');
const { getDevByLevel} = require('../Services/LevelServices');
const {getLevels, deleteLevel, postLevels} = require('../controllers/LevelsController');

const router = Router();

router.get('/', getLevels);
router.get('/levels/:id', getDevByLevel);

router.post('/levels/:id', postLevels);

router.delete('/levels/:id', deleteLevel);

module.exports = router;