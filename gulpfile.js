// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const replace = require('gulp-replace');
const babel = require("gulp-babel");
const browsersync = require('browser-sync').create();

var scssWatchSrc = 'src/**/*.scss';
var scssMainSrc = 'src/scss/style.scss';
var jsSrc = 'src/**/*.js';
var htmlSrc = 'src/**/*.html';
var dist = 'dist';

function jsTask(){
    return gulp
        .src(jsSrc)
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist')
    );
}

// // Cachebust
// var cbString = new Date().getTime();
// function cacheBustTask(){
//     return src(['index.html'])
//         .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
//         .pipe(dest('.'));
// }

// BrowserSync Reload
function reload() {
    browsersync.reload();

}

// Sass task: compiles the style.scss file into style.css
function scssTask() {
    return gulp
        .src(scssMainSrc)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(gulp.dest(dist))// put final CSS in dist folder
        .pipe(browsersync.stream())
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask() {
    browsersync.init({
        server: {
            baseDir: "./"
        },
    });
    gulp.watch(scssWatchSrc, scssTask);
    gulp.watch(htmlSrc).on('change', reload);
    gulp.watch(jsSrc, jsTask).on('change', reload);
}

exports.watchTask = watchTask;
exports.scssTask = scssTask;
exports.jsTask = jsTask;

var build = gulp.parallel(scssTask, jsTask, watchTask);

gulp.task('default', build);