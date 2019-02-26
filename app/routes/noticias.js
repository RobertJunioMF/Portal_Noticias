var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {

  var connection = dbConnection();
  app.get('/noticias', function(req,res){

    var select = 'SELECT * FROM noticias';
    connection.query(select, function(error, result){
      res.render('noticias/noticias', {noticias: result});
    });

  });
};
