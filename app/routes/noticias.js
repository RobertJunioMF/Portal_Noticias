// var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {

  app.get('/noticias', function(req,res){

    var connection = app.config.dbConnection();

    var select = 'SELECT * FROM noticias';
    connection.query(select, function(error, result){
      res.render('noticias/noticias', {noticias: result});
    });

  });
};
