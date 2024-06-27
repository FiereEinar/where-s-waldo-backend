const Score = require('../models/score');
const Response = require('../models/response');

exports.scores_get = async (req, res) => {
  try {
    const scores = await Score.find().sort({ time: 1 }).exec();

    res.json(new Response(true, scores, '', null));
  } catch (err) {
    console.error(err);
    res.status(500).json(new Response(false, null, 'An error occurred while fetching scores.', err));
  }
};

exports.score_post = async (req, res) => {
  try {
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
  } catch (err) {
    console.error(err);
    res.status(500).json(new Response(false, null, 'An error occurred while fetching scores.', err));
  }
};

exports.score_id_get = async (req, res) => {
  try {
    const scores = await Score.find({ gameID: req.params.gameID }).sort({ time: 1 }).exec();

    res.json(new Response(true, scores, '', null));
  } catch (err) {
    console.error(err);
    res.status(500).json(new Response(false, null, 'An error occurred while fetching scores.', err));
  }
};
