var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('html', function(cb){
	gulp.src('src/index.html')
		.pipe(gulp.dest('public'));
	cb();
});

gulp.task('img', function(cb){
	gulp.src('src/**/*.{png,jpg,gif}')
		.pipe(gulp.dest('public/'));
	cb();
});

gulp.task('css', function(cb){
gulp.src('src/**/*.css')
		.pipe(sourcemaps.init())
 			.pipe(cleanCSS())
 		.pipe(sourcemaps.write())
 		.pipe(gulp.dest('public/css'));
 	cb();
 });

gulp.task('js', function(cb){
gulp.src('src/**/*.js')
		.pipe(sourcemaps.init())
 			.pipe(uglify())
 		.pipe(sourcemaps.write())
 		.pipe(gulp.dest('public/js'));
 	cb();
 });

gulp.task('build', function(cb){
	runSequence(['html', 'css', 'js', 'img'], cb);
});
