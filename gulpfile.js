// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
var replace = require('gulp-replace');
var babel = require("gulp-babel");
var browserSync = require('browser-sync').create();

// File paths
const files = {
    scssPath: 'src/scss/**/*.scss',
    jsPath: 'src/**/*.js',
    htmlPath: 'src/**/*.html',
    destination: 'dist'
};

// Sass task: compiles the style.scss file into style.css
function scssTask(){
    return src(files.scssPath)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass().on('error', sass.logError)) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        // .pipe(replace(/(url()(..\/images\/\w+(.svg|.gif|.png|.jpg)))/gi, '$1../$2'))
        .pipe(dest(files.destination)
        ); // put final CSS in dist folder
}
// JS task: concatenates and uglifies JS files to script.js
function jsTask(){
    return src([
        files.jsPath
        //,'!' + 'includes/js/jquery.min.js', // to exclude any specific files
    ])
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(dest('dist')
        );
}

// Cachebust
var cbString = new Date().getTime();
function cacheBustTask(){
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}


// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    });
    watch([files.scssPath, files.jsPath, files.htmlPath],
        series(
            parallel(scssTask, jsTask),
            cacheBustTask
        )
    ).on('change', browserSync.reload)
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    parallel(scssTask, jsTask),
    cacheBustTask,
    watchTask
);