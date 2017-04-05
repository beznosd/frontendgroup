var gulp = require('gulp');
var less = require('gulp-less');
/*

  1) Найти в npm плагины:
    - gulp-clean-css
    - gulp-livereload
  И прочитать, как их использовать.

  Искать плагины gulp можно на самом npm https://www.npmjs.com/
  Или на сайте gulp в разделе plugins http://gulpjs.com/plugins/

  2) Установить и подключить в этот файл gulp плагины:
      - gulp-livereload
      - gulp-clean-css
  Документация по npm: https://docs.npmjs.com/

  3) Добавить минификацию css в задачу 'less'

  4) Подключить livereload

  ------- Результат ---------

  Вы запускаете задачу gulp watch, у вас начинают отслеживаться файлы
    - index.html
    - style.less
  При изменениях в этих файлах gulp будет автоматически запускать задачи html или less
  И изменения уже автоматически будут видны в браузере, не нужно обновлять страничку

  В браузере мы открываем фалик public/index.html

  В src/ мы ведем разработку, в public/ видим результат и ничего там не меняем
  Все изменения только в src/

*/

gulp.task('less', function() {
  return gulp.src('src/style.less')
    .pipe(less())
    .pipe(gulp.dest('public/'))
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('public/'));
});

gulp.task('build', ['less', 'html']);

gulp.task('watch', function() {
  gulp.watch('src/style.less', ['less']);
  gulp.watch('src/index.html', ['html']);
});