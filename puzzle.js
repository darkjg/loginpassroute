// Snippets de código para poder componer el programa

//Usado?: yes
  const middlewares = require('./middlewares');
//--- Explicación: sirve para importar los middlewares

// -------------------------------------------------------------------------------------

//Usado?: yes
const bodyParser = require('body-parser');
//--- Explicación: sirve para la importacion del midelware Body-parser que es una librería de Node.js que se utiliza con Express para analizar y procesar los datos de solicitudes HTTP, como JSON

// -------------------------------------------------------------------------------------

//Usado?: yes 
const session = require('express-session');
//--- Explicación: midelware para realizar un login ,logout usando express

// -------------------------------------------------------------------------------------

//Usado?: yes
const express = require('express');
//--- Explicación: sirve para importar express

// -------------------------------------------------------------------------------------

//Usado?: yes 
const bodyParser = require('body-parser');
//--- Explicación: sirve para la importacion del midelware Body-parser que es una librería de Node.js que se utiliza con Express para analizar y procesar los datos de solicitudes HTTP, como JSON

// -------------------------------------------------------------------------------------

//Usado?: yes
const session = require('express-session');
//--- Explicación: midelware para realizar un login ,logout usando express

// -------------------------------------------------------------------------------------

//Usado?: yes
const dotenv = require('dotenv');
//--- Explicación:importa la libreria para la carga de los archivos .env

// -------------------------------------------------------------------------------------

//Usado?: yes
 const middlewares = require('./middlewares');
//--- Explicación: sirve para importar 

// -------------------------------------------------------------------------------------

//Usado?: yes
const routes = require('./routes');
//--- Explicación: sirve para importar routes

// -------------------------------------------------------------------------------------

//Usado?: 
dotenv.config();
//--- Explicación:carga el archivo .env

// -------------------------------------------------------------------------------------

//Usado?: 
 const app = express();
//--- Explicación: inicializa el metodo express

// -------------------------------------------------------------------------------------

//Usado?: 
 const PORT = 4000;
//--- Explicación: numero de puerto de la aplicacion 

// -------------------------------------------------------------------------------------

//Usado?: yes
const dotenv = require('dotenv');
//--- Explicación: importa la libreria para la carga de los archivos .env

// -------------------------------------------------------------------------------------

//Usado?: yes
dotenv.config();
//--- Explicación:carga el archivo .env

// -------------------------------------------------------------------------------------

//Usado?: yes
middlewares.setupApp(app);
//--- Explicación: llamada a steupapp y envio de app 

// -------------------------------------------------------------------------------------

//Usado?: yes
routes.setup(app);
//--- Explicación: llamada a steup y envio de app 

// -------------------------------------------------------------------------------------

//Usado?: yes
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: midelware para la validacion de la palabra 


// -------------------------------------------------------------------------------------


//Usado?: yes
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: ruta a inicio comprobacion mostrara el mensaje de error en caso de ser necesario  y si la palabra secreta es correcta redireciona a profile


// -------------------------------------------------------------------------------------


//Usado?: yes
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: crea la pagina de inicio


// -------------------------------------------------------------------------------------
//Usado?:yes

const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//--- Explicación: recoge de la url los datos de login y crea la sesion

// --------------------------------------------------------------------------------------

//Usado?: yes
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: ruta a profile con el midelware sin que veamos en la url 

// -------------------------------------------------------------------------------------

//Usado?: yes
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: recoge de la url los datos 

// -------------------------------------------------------------------------------------

//Usado?: yes
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: login de la sesion 

// -------------------------------------------------------------------------------------

//Usado?: yes
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: arranca el servidor y escucha en el puerto port

// -------------------------------------------------------------------------------------

//Usado?: yes
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: sirve para verificar si se ha iniciado sesion con la palabra secreta correcta 

// -------------------------------------------------------------------------------------


//Usado?: yes
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: Ruta a profile con el midelware usando la url 

// -------------------------------------------------------------------------------------


//Usado?: yes
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: uta a profile con el midelware 

// -------------------------------------------------------------------------------------

//Usado?:
module.exports = {
  setup,
};
//--- Explicación:exportar setup

// -------------------------------------------------------------------------------------

//Usado?:
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:exportar setupapp

// -------------------------------------------------------------------------------------

