const Score = require('../models/score');
const Response = require('../models/response');

exports.scores_get = async (req, res) => {
  const scores = await Score.find().sort({ time: 1 }).exec();

  res.json(new Response(true, scores, '', null));
};

exports.score_post = async (req, res) => {
  const { username, time, gameID } = req.body;

  if (!username || !time) {
    return res.json(new Response(false, null, 'Empty username and time', null));
  }

  const score = new Score({
    username: username,
    time: time,
    gameID: gameID,
  });

  await score.save();

  res.json(new Response(true, score, 'Score added successfully', null));
};

exports.score_id_get = async (req, res) => {
  const scores = await Score.find({ gameID: req.params.gameID }).sort({ time: 1 }).exec();

  res.json(new Response(true, scores, '', null));
};
