// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var inlinesource = require('gulp-inline-source');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('style', function() {
    gulp.src('src/*.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(plumber())
        .pipe(cssmin())
        .pipe(gulp.dest('./'));
});

gulp.task('reload', function() {
    gulp.src('*.html')
        .pipe(reload({stream:true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        ui: {
            port: 9008,
            weinre: {
                port: 9009
            }
        },
        ghostMode: false,
        notify: false,
        open: 'external',
        port: 9000
    });
});

// 监听文件变化
gulp.task('watch', function () {
    gulp.watch('src/*.scss', ['style','reload']);
});

// 默认任务
gulp.task('default', ['style', 'watch', 'browser-sync']);