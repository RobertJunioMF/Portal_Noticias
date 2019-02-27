function NoticiasDAO(connection) {
  this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
  var select = 'SELECT * FROM noticias';
  this._connection.query(select, callback);
};

NoticiasDAO.prototype.getNoticia = function(callback) {
  var select = 'SELECT * FROM noticias WHERE id = 2';
  this._connection.query(select, callback);
};

NoticiasDAO.prototype.salvar = function(noticia, callback) {
  var insert = 'INSERT INTO noticias SET ? ';
  this._connection.query(insert, noticia, callback);
};

module.exports = function() {
  return NoticiasDAO;
}
