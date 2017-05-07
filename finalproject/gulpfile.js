const gulp = require('gulp');
const less = require('gulp-less');
const gulpIf = require('gulp-if');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const remember = require('gulp-remember');
const cache = require('gulp-cached');

const browserSync = require('browser-sync').create();

gulp.task('html', function(){
	gulp.src('app/index.html')
		.pipe(gulp.dest('public'));
});

gulp.task('css', function(cb){
	gulp.src([
			'node_modules/normalize.css',
			'node_modules/bootstrap/css/bootstrap.css',
			'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css',
			'app/css/*.less'
		])
		.pipe(cache('styles'))
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(autoprefixer('last 10 version', 'ie 9'))
		.pipe(remember('styles'))
		.pipe(cleanCSS())
		.pipe(concat('all.min.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/css'));
	cb();
});

gulp.task('js', function(cb){
	gulp.src([
			'node_modules/bootstrap/js/bootstrap.min.js',
			'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
			'app/js/**/*.js'
		])
		.pipe(cache('scripts'))
		.pipe(sourcemaps.init())
		.pipe(remember('scripts'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(concat('script.min.js'))
		.pipe(gulp.dest('public/js'));
	cb();
});

gulp.task('img', function(){
	gulp.src('app/img/**/*.{jpg,png}')
		.pipe(gulp.dest('public/img'));
});

gulp.task('fonts', function(){
	gulp.src([
			'app/fonts/**/*.*',
			'node_modules/bootstrap/fonts/glyphicons-halflings-regular.ttf'
		])
		.pipe(gulp.dest('public/fonts'));
});

gulp.task('build', ['html', 'css', 'js', 'img', 'fonts']);

gulp.task('watch', function(cb){
	gulp.watch('css/*.less', ['css']);
	gulp.watch('app/js/*.js', ['js']);
	gulp.watch('app/img/**/*.*', ['img']);
	gulp.watch('app/fonts/**/*.*', ['fonts']);
	gulp.watch('app/index.html', ['html']);
	cb();
});

gulp.task('sync', function(cb){
	browserSync.init({
		server: 'public'
	});

	browserSync.watch('app/**/*.*').on('change', browserSync.reload);
});

gulp.task('run', ['build'], function(cb){
	runSequence(['watch', 'sync'], cb);
});