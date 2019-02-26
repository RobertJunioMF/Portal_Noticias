module.exports = function(app) {
  app.get('/formulario/noticia', function(req,res){
      res.render('admin/form_add_noticia');
  });
};
