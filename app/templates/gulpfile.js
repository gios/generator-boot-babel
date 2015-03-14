var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    webpackConf = require('./webpack.config.js');

gulp.task('webpack', function () {
    'use strict';
    return gulp.src('src/entry.js')
        .pipe(webpack(webpackConf))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['webpack']);