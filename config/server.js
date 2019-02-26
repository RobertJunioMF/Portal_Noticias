var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign().include('app/routes').into(app); // inclui todos rotas dentro do app (dir routes)

module.exports = app;
