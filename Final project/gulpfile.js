var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var cache = require('gulp-cached');


gulp.task('html', function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('public'));
});

gulp.task('images', function(){
    gulp.src('src/images/**/*.*')
        .pipe(gulp.dest('public/images'));
});

gulp.task('css', function(callback) {
    gulp.src('src/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('public'));
});

gulp.task('fonts', function(callback) {
    gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('public/fonts'));
});

gulp.task('js', function(callback) {
    gulp.src('src/js/**/*.*')
        .pipe(cache('scripts'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

gulp.task('build', ['html', 'css', 'fonts', 'js', 'images']);