const express = require('express');
const router = express.Router();
const c = require('../controllers/topic.controller');

/* ===== Topics CRUD ===== */
router.get('/', c.index);
router.post('/topics', c.createTopic);
router.post('/topics/:id/update', c.updateTopic);
router.post('/topics/:id/delete', c.deleteTopic);
router.post('/topics/:id/vote', c.voteTopic);

/* ===== Links CRUD + Votes ===== */
router.post('/topics/:id/links', c.addLink);
router.post('/topics/:topicId/links/:linkId/vote', c.voteLink);
router.post('/topics/:topicId/links/:linkId/delete', c.deleteLink);

module.exports = router;
