const express = require('express');
const router = express.Router();

const {
  scores_get,
  score_id_get,
  score_post,
} = require('../controllers/scoresController');

router.get('/', scores_get);

router.get('/:gameID', score_id_get);

router.post('/', score_post);

module.exports = router;
