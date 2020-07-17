const express = require('express');
const path = require('path');
const morgan = require('morgan');
const clientSession = require('client-sessions');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const {SESSION_SECRET} = require('./config');

const app = express();
const api = require('./src/api');

// routes
var homeRouter = require('./routes/home');
var mappingRouter = require('./routes/mapping');
var parcelsRouter = require('./routes/parcels');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Setting up the middleware

app.use(morgan('short'));
app.use(express.json());
app.use(bodyParser.urlencoded(
  { extended: true }
));
app.use(bodyParser.json());
app.use(
  clientSession({
    cookieName: 'session',
    secret: SESSION_SECRET,
    duration: 24 * 60 * 60 * 1000
  })
);
app.use(helmet());
app.use(api);

//  __dirname tells you the absolute path of the directory 
//  containing the currently executing file
app.use('/public', express.static(path.join(__dirname, '/public')));
console.log(__dirname)

// add route-handling code

app.use('/', homeRouter);
app.use('/mapping', mappingRouter);
app.use('/parcels', parcelsRouter);
app.get('/health', (request, response) => response.sendStatus(200));

let server;
module.exports = {
  start(port) {
    server = app.listen(port, () => {
      console.log(`App started on port ${port}`);
    });
    return app;
  },
  stop() {
    server.close();
  }
};
