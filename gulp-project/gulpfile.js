var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var cleanCss = require('gulp-clean-css');

gulp.task('less', function() {
	return gulp.src('src/less/main.less')
	.pipe(less())
	.pipe(cleanCss())
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'less'], function() {
	gulp.watch('src/less/main.less', ['less']);
	gulp.watch('src/*.html', browserSync.reload); /*Reload of html*/
});

gulp.task('build', ['less'], function() {
	var buildCss = gulp.src([
		'src/css/main.css',
	]).pipe(gulp.dest('dist/css'));
	
	// var buildFonts = gulp.src('src/fonts/**/*')
	// .pipe(gulp.dest('dist.fonts'));  /*build fonts when they will be*/

	var buildHtml = gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));
});