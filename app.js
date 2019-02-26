var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormNoticia = require('./app/routes/formulario-noticia')(app);


app.listen(3000, function(){
  console.log('Servidor ON');
});



// echo fs.inotify.max_user_watches = 524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
