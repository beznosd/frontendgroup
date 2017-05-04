var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var chmod = require('gulp-chmod');
var del = require('del');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var less = require('gulp-less');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

//compile less, create sourcemaps and refresh browsers
gulp.task('less', function() {

    //report error
    var reportError = function(error) {
        var report = '\n';
        var chalk = gutil.colors.white.bgRed;

        if (error.plugin) {
            report += chalk('PLUGIN:') + ' [' + error.plugin + ']\n';
        }
        if (error.message) {
            report += chalk('ERROR:\040') + ' ' + error.message + '\n';
        }
        console.error(report);

        if (error.line && error.column) {
            var notifyMessage = 'LINE ' + error.line + ':' + error.column + ' -- ';
        } else {
            var notifyMessage = '';
        }

        notify({
            title: 'FAIL: ' + error.plugin,
            message: notifyMessage + 'See console.',
            sound: 'Beep'
        }).write(error);

        gutil.beep();
        this.emit('end');
    }

    //less, sourcemaps and refresh
    return gulp.src('src/less/*.less')
        //custom error gist NEEDED
        .pipe(plumber({
            errorHandler: reportError
        }))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

//browserSync settings
gulp.task('browser-sync', function() {
    browserSync({
        browser: "google chrome",
        server: {
            baseDir: 'src'
        },
        notify: false
    });
});

//watch settings
gulp.task('watch', ['browser-sync', 'less'], function() {
    gulp.watch('src/less/*.less', ['less']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/*.js', browserSync.reload);
});

//remove public
gulp.task('removepublic', function() {
    return del.sync('public');
});

//create public
gulp.task('build', ['less', 'removepublic'], function() {
    var buildCss = gulp.src('src/css/*.css')
        .pipe(gulp.dest('public/css'));

    var buildJs = gulp.src('src/js/*.js')
        .pipe(gulp.dest('public/js'));

    var buildImg = gulp.src('src/images/**/*.{jpg,png,svg}')
        .pipe(gulp.dest('public/images'));

    var buildFonts = gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('public/fonts'));

    var buildHtml = gulp.src('src/*.html')
        .pipe(gulp.dest('public'));
});

//set default task
gulp.task('default', ['watch']);
