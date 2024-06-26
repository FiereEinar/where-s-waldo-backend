const express = require('express');
const router = express.Router();

const {
  scores_get,
} = require('../controllers/scoresController');

router.get('/', scores_get);

module.exports = router;