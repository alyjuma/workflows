var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat');
    compass = require('gulp-compass');



var sassSources = ['components/sass/styles.scss'];

var jsSources = ['components/scripts/.'];


//JS compiled
gulp.task('js', function() {
    gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(gulp.dest('builds/development/js'))
});


//Sass with compass
gulp.task('compass', function() {
    gulp.src(sassSources)
    .pipe(compass({
        sass: 'components/sass',
        image:'builds/development/images',
        style: 'expanded'
    }))
    .pipe(gulp.dest('builds/development/css'))
});
