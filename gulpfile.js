var gulp        = require('gulp'),
  	gutil       = require('gulp-util'),
  	sass        = require('gulp-sass'),
  	jade        = require('gulp-jade'),
  	coffee      = require('gulp-coffee'),
    minifyHTML  = require('gulp-minify-html'),
    minifyCSS   = require('gulp-minify-css');
 
gulp.task('minify-html', function() {
  gulp.src('dist/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist/'));
});
 
gulp.task('minify-css', function() {
  gulp.src('dist/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
}); 

gulp.task('sass', function () {
  gulp.src('app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('jade', function() {
  gulp.src('app/*.jade')
    .pipe(jade().on('error', gutil.log))
    .pipe(gulp.dest('dist/'))
});
 
gulp.task('coffee', function() {
  gulp.src('app/coffee/*.coffee')
    .pipe(coffee().on('error', gutil.log))
    .pipe(gulp.dest('dist/js/'))
});
 
gulp.task('default', function () {
  gulp.watch('app/sass/*.scss', ['sass'])
  gulp.watch('app/*.jade', ['jade'])
  gulp.watch('app/coffee/*.coffee', ['coffee'])
  gulp.watch('dist/*.html', ['minify-html'])
  gulp.watch('dist/css/*.css', ['minify-css'])
});
 
