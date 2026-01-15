// Manejo de votaciones y edición (JS puro)
document.addEventListener('click', e => {

  // Votar tema
  if (e.target.classList.contains('vote-topic')) {
    const id = e.target.dataset.id;

    fetch(`/topics/${id}/vote`, { method: 'POST' })
      .then(() => {
        const span = document.getElementById(`topic-votes-${id}`);
        span.textContent = Number(span.textContent) + 1;
      });
  }

  // Votar enlace
  if (e.target.classList.contains('vote-link')) {
    const topicId = e.target.dataset.topic;
    const linkId = e.target.dataset.link;

    fetch(`/topics/${topicId}/links/${linkId}/vote`, { method: 'POST' })
      .then(() => {
        const span = document.getElementById(`link-votes-${linkId}`);
        span.textContent = Number(span.textContent) + 1;
      });
  }

});

// Mostrar / ocultar edición de título
function toggleEdit(id) {
  const view = document.getElementById(`view-title-${id}`);
  const form = document.getElementById(`edit-form-${id}`);

  view.classList.toggle('hidden');
  form.classList.toggle('hidden');
}
