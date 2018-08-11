/*-----------------------  Variáveis  ----------------------*/
const gulp = require('gulp');
const express = require('express');

/* Tarefa padrão */

gulp.task('default', function(){
    gulp.start('express');
});

/*----------------- Servidor ------------------*/

gulp.task('express', function(){
    var app = express();
    app.use(express.static(__dirname + '/'));
    app.listen(process.env.PORT || 5000);
});