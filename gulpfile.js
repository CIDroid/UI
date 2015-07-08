var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('serve', function () {

    browserSync.init({
        server: {
            baseDir: './public/'
        }
    });

    gulp.watch('./public/*.html')
    	.on('change', browserSync.reload);
});

gulp.task('default', ['serve']);