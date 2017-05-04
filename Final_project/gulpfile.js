'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var runSequence = require('gulp-run-sequence');

gulp.task('css', function(cb){
	gulp.src('src/css/*.less')
		.pipe(less())
		.pipe(concat('app.css'))
		.pipe(cleanCSS())
		.pipe(gulp.dest('public/css'));
	cb();
});

gulp.task('js', function(cb){
	gulp.src('src/js/*.js')
		.pipe(concat('script.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/js'));
	cb();
});

gulp.task('html', function(cb){
	gulp.src('src/*.html')
		.pipe(gulp.dest('public'));
	cb();
});

gulp.task('images', function(cb){
	gulp.src('src/images/*.{jpg,png}')
		.pipe(gulp.dest('public/images'));
	cb();
});


gulp.task('build', function(cb){
	runSequence( ['html', 'css', 'js', 'images'], cb);
});

