'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

// gulp.task('css', function(cb){
// 	gulp.src('src/**/*.{css,less}')
// 		.pipe(less())
// 		.pipe(concat('all.css'))
// 		.pipe(cleanCSS())
// 		.pipe(gulp.dest('public/css'));
// 	cb();
// });

gulp.task('js', function(cb) {
	gulp.src('src/*.js')
		.pipe(gulp.dest('public/'))
		.pipe(livereload());
	cb();
});

gulp.task('less', function() {
  	return gulp.src('src/style.less')
    	.pipe(less())
    	.pipe(cleanCSS())
    	.pipe(gulp.dest('public/'))
    	.pipe(livereload());
});

gulp.task('html', function() {
  	return gulp.src('src/index.html')
   	.pipe(gulp.dest('public/'))
   	.pipe(livereload());
});


gulp.task('images', function() {
  	return gulp.src('src/images/*.*')
   	.pipe(gulp.dest('public/images/'))
   	.pipe(livereload());
});

gulp.task('assets', function() {
  	return gulp.src('src/assets/*.*')
   	.pipe(gulp.dest('public/assets/'))
   	.pipe(livereload());
});

gulp.task('fonts', function() {
  	return gulp.src('src/fonts/*.*')
   	.pipe(gulp.dest('public/fonts/'))
   	.pipe(livereload());
});

gulp.task('build', ['less', 'html', 'js', 'images', 'assets', 'fonts']);

gulp.task('watch', function() {
   	livereload.listen({ basePath: 'public' });
  	gulp.watch('src/style.less', ['less'])
  	gulp.watch('src/script.js', ['js'])
	gulp.watch('src/index.html', ['html']);
});

