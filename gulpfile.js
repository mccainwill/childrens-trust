var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
   
   return gulp.src('wp-content/themes/childrens-trust/sass/style.scss')
    .pipe(sass()) //Using gulp-sass
    .pipe(gulp.dest('wp-content/themes/childrens-trust/'))
    
});

gulp.task('watch', function(){
    gulp.watch('wp-content/themes/childrens-trust/sass/*.scss', ['sass']);
});