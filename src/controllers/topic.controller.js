const Topic = require('../models/topic.model');

/* Render main view */
exports.index = (req, res) => {
  res.render('index', { topics: Topic.getAll() });
};

/* Topics */
exports.createTopic = (req, res) => {
  Topic.createTopic(req.body.title);
  res.redirect('/');
};

exports.updateTopic = (req, res) => {
  Topic.updateTopic(Number(req.params.id), req.body.title);
  res.redirect('/');
};

exports.deleteTopic = (req, res) => {
  Topic.deleteTopic(Number(req.params.id));
  res.redirect('/');
};

exports.voteTopic = (req, res) => {
  Topic.voteTopic(Number(req.params.id));
  res.json({ ok: true });
};

/* Links */
exports.addLink = (req, res) => {
  Topic.addLink(Number(req.params.id), req.body.url);
  res.redirect('/');
};

exports.voteLink = (req, res) => {
  Topic.voteLink(
    Number(req.params.topicId),
    Number(req.params.linkId)
  );
  res.json({ ok: true });
};

exports.deleteLink = (req, res) => {
  Topic.deleteLink(
    Number(req.params.topicId),
    Number(req.params.linkId)
  );
  res.redirect('/');
};
