var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');

gulp.task('default', function () {
        gulp.src('src/*.jsx')

        .pipe(react())
        .pipe(gulp.dest('src/build'))


        gulp.src('src/build/exemple10.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('src/build/'))
});
