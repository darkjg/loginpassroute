const express = require('express');
const app = express();
const dotenv = require('dotenv');
const middlewares = require('./middlewares');
const routes = require('./routes');
const bodyParser = require('body-parser');
const session = require('express-session');
const PORT = 4000;
dotenv.config();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

middlewares.setupAPP(app);

routes.setup(app);

app.use((req, res) => {
  res.status(404).send('404 Página no encontrada')
})


app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });  