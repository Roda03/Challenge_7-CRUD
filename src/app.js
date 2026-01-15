const express = require('express');
const path = require('path');

const app = express();

/* ===== Middlewares ===== */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* ===== EJS ===== */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ===== Routes ===== */
const topicRoutes = require('./routes/topic.routes');
app.use('/', topicRoutes);

/* ===== Server ===== */
app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
