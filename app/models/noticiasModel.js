module.exports = function() {

  this.getNoticias = function(connection, callback) {
    var select = 'SELECT * FROM noticias';
    connection.query(select, callback);
  };

  this.getNoticia = function(connection, callback) {
    var select = 'SELECT * FROM noticias WHERE id = 2';
    connection.query(select, callback);
  };

  this.salvar = function(noticia, connection, callback) {
    var insert = 'INSERT INTO noticias SET ? ';
    connection.query(insert, noticia, callback);
  }

  return this;
}
