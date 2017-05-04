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
	gulp.src('src/index.html')
		.pipe(gulp.dest('public'));
});

gulp.task('css', function(cb){
	gulp.src([
			'node_modules/normalize.css/normalize.css',
			'node_modules/bootstrap/dist/css/bootstrap.css',
			'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css',
			'src/style/**/*.less'
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
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/bootstrap/dist/js/bootstrap.min.js',
			'node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
			'src/js/**/*.js'
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

gulp.task('images', function(){
	gulp.src('src/images/**/*.{jpg,png}')
		.pipe(gulp.dest('public/images'));
});

gulp.task('fonts', function(){
	gulp.src([
			'src/fonts/**/*.*',
			'node_modules/bootstrap/fonts/glyphicons-halflings-regular.ttf'
		])
		.pipe(gulp.dest('public/fonts'));
});

gulp.task('build', ['html', 'css', 'js', 'images', 'fonts']);

gulp.task('watch', function(cb){
	gulp.watch('src/style/*.less', ['css']);
	gulp.watch('src/js/*.js', ['js']);
	gulp.watch('src/images/**/*.*', ['images']);
	gulp.watch('src/fonts/**/*.*', ['fonts']);
	gulp.watch('src/index.html', ['html']);
	cb();
});

gulp.task('sync', function(cb){
	browserSync.init({
		server: 'public'
	});

	browserSync.watch('src/**/*.*').on('change', browserSync.reload);
});

gulp.task('run', ['build'], function(cb){
	runSequence(['watch', 'sync'], cb);
});