'use strict';

var gulp = require('gulp'),
    gp = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });

    browserSync.watch('build', browserSync.reload)

});

gulp.task('pug', function () {
    return gulp.src('src/*.pug')
        .pipe(gp.pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
    return gulp.src('src/sass/*.sass')
        .pipe(gp.sourcemaps.init())
        .pipe(gp.sass({}))
        .pipe(gp.autoprefixer({
            overrideBrowserslist: ['> 1%', 'last 2 versions']

        }))
        .on("error", gp.notify.onError(function (error) {
            return "Style: " + error.message;
        }))
        .pipe(gp.csso({}))
        .pipe(gp.sourcemaps.write())
        .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function () {
    gulp.watch('src/*.pug', gulp.series('pug'));
    gulp.watch('src/sass/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series(
    gulp.parallel('pug', 'sass'),
    gulp.parallel('watch', 'serve')
));