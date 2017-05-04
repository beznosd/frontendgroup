var gulp 		= require('gulp'),
	browserSync = require('browser-sync')
	concat      = require('gulp-concat'),
	uglify      = require('gulp-uglifyjs');


gulp.task('browser-sync', function() {
	 browserSync({
	 	server: {
	 		baseDir:'app'
	 	},
	 		notify:false

	 });
});

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});