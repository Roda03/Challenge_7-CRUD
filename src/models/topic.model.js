let topics = [];
let nextTopicId = 1;
let nextLinkId = 1;

/* Return topics ordered by votes */
function getAll() {
  return topics
    .map(t => ({
      ...t,
      links: t.links.sort((a, b) => b.votes - a.votes)
    }))
    .sort((a, b) => b.votes - a.votes);
}

/* Topics CRUD */
function createTopic(title) {
  topics.push({
    id: nextTopicId++,
    title,
    votes: 0,
    links: []
  });
}

function updateTopic(id, title) {
  const topic = topics.find(t => t.id === id);
  if (topic) topic.title = title;
}

function deleteTopic(id) {
  topics = topics.filter(t => t.id !== id);
}

function voteTopic(id) {
  const topic = topics.find(t => t.id === id);
  if (topic) topic.votes++;
}

/* Links CRUD */
function addLink(topicId, url) {
  const topic = topics.find(t => t.id === topicId);
  if (!topic) return;

  topic.links.push({
    id: nextLinkId++,
    url,
    votes: 0
  });
}

function voteLink(topicId, linkId) {
  const topic = topics.find(t => t.id === topicId);
  if (!topic) return;

  const link = topic.links.find(l => l.id === linkId);
  if (link) link.votes++;
}

function deleteLink(topicId, linkId) {
  const topic = topics.find(t => t.id === topicId);
  if (!topic) return;

  topic.links = topic.links.filter(l => l.id !== linkId);
}

module.exports = {
  getAll,
  createTopic,
  updateTopic,
  deleteTopic,
  voteTopic,
  addLink,
  voteLink,
  deleteLink
};
