const express = require('express');
const app = express();

const routes = require('./routes');
const PORT = 4000;
const bodyParser = require('body-parser');
const session = require('express-session');

routes.setup(app);



app.use((req, res) => {
    res.status(404).send('404 Página no encontrada')
  })

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });  