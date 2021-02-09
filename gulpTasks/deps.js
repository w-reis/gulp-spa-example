const gulp = require('gulp');
const { src, dest } = require('gulp');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

const depsCss = () => {
  return src('node_modules/font-awesome/css/font-awesome.css')
    .pipe(uglifycss({"uglyComments": false}))
    .pipe(concat('deps.min.css'))
    .pipe(dest('build/assets/css'))
}

const depsFonts = () => {
  return src('node_modules/font-awesome/fonts/*.*')
    .pipe(dest('build/assets/fonts'))
}

module.exports = {
  depsCss,
  depsFonts
}