var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    concat  = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify  = require('gulp-uglify'),
    jshint  = require('gulp-jshint'),
    rename  = require('gulp-rename'),
    notify  = require('gulp-notify'),
    minifyCSS   = require('gulp-minify-css');

var paths = {
        in : {
            scripts : 'resources/js/',
            sass    : 'resources/sass/'
        },
        out : {
            fonts   : 'fonts',
            scripts : 'js',
            styles  : 'css'
        }
    };

var files = {
        css    : '*.css',
        js     : '*.js',
        sass   : '*/*.scss',
        script : 'script.js',
        style  : 'style.scss'
    };

gulp.task('styles', function() {
    return gulp.src( paths.in.sass + files.style )
            .pipe( sass({ errLogToConsole: true }) )
            .pipe( autoprefixer('last 5 version') )
            .pipe( rename({ suffix: '.min' }) )
            .pipe( minifyCSS() )
            .pipe( gulp.dest(paths.out.styles) )
            .pipe( notify( function(file) {
                return 'SASS Compiler file: '+ file.relative;
            }) );
});

gulp.task('scripts', function() {
    return gulp.src( paths.in.scripts + files.script )
        .pipe( jshint('.jshintrc') )
        .pipe( jshint.reporter('default') )
        .pipe( rename({ suffix: '.min' }) )
        .pipe( uglify() )
        .pipe( gulp.dest(paths.out.scripts) )
        .pipe( notify( function(file) {
            return 'Scripts Compiler file: '+ file.relative;
        }) );
});


gulp.task('watch', function() {
    gulp.watch( paths.in.sass + files.sass, ['styles'] );
    gulp.watch( paths.in.scripts + files.js, ['scripts'] );
});

gulp.task('default', [ 'styles', 'scripts', 'watch' ]);
