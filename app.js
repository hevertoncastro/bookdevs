// CONFIG
var express = require('express');
var app = express();
var methodOverride = require('method-override'); //Entender PUT, DELETE por cabeçalho na requisição
var bodyParser = require('body-parser'); //Entender request.body como objeto, não string
var path = require('path'); //módulo do node
var swig = require('swig');

app.use(methodOverride('X-HTTP-Method')); //cabeçalho
app.use(methodOverride('X-HTTP-Method-Override')); //cabeçalho
app.use(methodOverride('X-Method-Override')); //cabeçalho
app.use(methodOverride('_method')); //input

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', swig.renderFile); //Swig usado para renderizar HTML
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

if(app.get('env') == 'development'){ //Se estiver em desenvolvimento servir arquivos estáticos com node
	app.use(express.static(path.join(__dirname, 'public')));
}

// ROTA
app.use('/', require('./routes')(app));

// ERROR
app.use(function(request, response, next) {
  response.send('Error 404');
});

app.use(function(err, request, response, next) {
  response.status(500).send('Error 500: '+err);
});

module.exports = app;