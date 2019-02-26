var http = require('http');
var server = http.createServer( function(req, res) {

  var categoria = req.url;

  if(categoria == '/tecnologia') {
    res.end("<html><body>Noticia de Tecnologia</body></html>");
  } else if(categoria == '/games') {
    res.end("<html><body>Noticia de games</body></html>");
  } else if(categoria == '/livros') {
    res.end("<html><body>Noticia de livros</body></html>");
  } else {
    res.end("<html><body>Portal de noticias</body></html>");
  }

}).listen(3000);
