module.exports = function(app) {
  app.get('/formulario/noticia', function(req,res){
      res.render('admin/form_add_noticia');
  });

  app.post('/noticias/salvar', function(req,res){
    var noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').noEmpty();
    req.assert('resumo', 'Resumo é obrigatório').noEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100)();
    req.assert('autor', 'Autor é obrigatório').noEmpty();
    req.assert('data_noticia', 'Data é obrigatório').noEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia', 'Notícia é obrigatório').noEmpty();

    var erros = req.validationErrors();

    if(errors) {
      res.render('admin/form_add_noticia');
      return; // se tiver erro na validação o processo seguinte não sera executado, por isso o return vazio
    }

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvar(noticia, function(error, result){
      res.redirect('/noticias');
    });
  });
};
