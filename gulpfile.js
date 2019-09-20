const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const uglifycss = require('gulp-uglifycss');
const sass = require('gulp-sass');
const image = require('gulp-image');
const spritesmith = require('gulp.spritesmith');
// const babel = require('gulp-babel'); // TODO: config js enviroment

sass.compiler = require('node-sass');

gulp.task('css', function () {
    return gulp.src('./src/assets/scss/main.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/assets/css/'))    
        
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./src/assets/css/'));
});

gulp.task('image', async () => {
    gulp.src('./src/assets/img/fixture/*')
      .pipe(image())
      .pipe(gulp.dest('./src/assets/img/'));
});

gulp.task('sprite', async () => {
    gulp.src('./src/assets/sprite/items/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css'
    }))
    .pipe(gulp.dest('./src/assets/sprite/'));
});

gulp.task('sass', async () => {
    gulp.src('./src/assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(gulp.dest('./src/assets/scss/'))
    // .pipe(sourcemaps.init())
    // .pipe(autoprefixer())
    // .pipe(concat('main.css'))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/assets/css/'))    
    
    // .pipe(uglifycss({
    //     "uglyComments": true
    // }))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./src/assets/css/'));    
});

gulp.task('watch', () => {
    // gulp.watch('./src/assets/scss/main.css', gulp.series(['css']));
    gulp.watch('./src/assets/scss/**/*.scss', gulp.series(['sass']));
    gulp.watch('./src/assets/sprite/items/*.png', gulp.series(['sprite']));
    gulp.watch('./src/assets/img/fixture/*', gulp.series(['image']));
});

gulp.task('default', gulp.series(['watch']));