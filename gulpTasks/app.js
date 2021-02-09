const gulp = require('gulp');
const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

const appHtml = () => {
  return src('src/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest('build'))
}

const appCss = () => {
  return src('src/assets/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(concat('app.min.css'))
    .pipe(dest('build/assets/css'))
}

const appJs = () => {
  return src('src/assets/js/**/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(dest('build/assets/js'))
}

const appImg = () => {
  return src('src/assets/imgs/**/*.*')
    .pipe(dest('build/assets/imgs'))
}

gulp.task('appHtml', appHtml);
gulp.task('appCss', appCss);
gulp.task('appJs', appJs);
gulp.task('appImg', appImg);

module.exports = {
  appHtml,
  appCss,
  appJs,
  appImg
}