var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var minifyCss = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');

gulp.task('dev', ['watch:css', 'watch:js']);
gulp.task('build', ['css', 'js']);

gulp.task('dev:server', function(){
    nodemon({
        script: 'server.js',
        ext: 'js',
        ignore: 'assets*'
    })
});

gulp.task('js', function() {
    gulp.src(['library/angular-ui-router/angular-ui-router.min.js','app.module.js', 'app.routes.js', 'components/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        //.pipe(uglify({mangle: false}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'))
});

gulp.task('watch:js', ['js'], function(){
    gulp.watch(['app.module.js', 'app.routes.js','components/**/*.js'], ['js'])
});

gulp.task('css', function() {
    return gulp.src(['library/bootstrap/bootstrap.min.css','app.css'])
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('assets'));
});

gulp.task('watch:css', ['css'], function(){
    gulp.watch(['app.css'], ['css'])
});

