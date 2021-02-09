const gulp = require('gulp');
const { src, dest } = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');

const server = () => {
  return src('build')
    .pipe(webserver({
      port: 8080,
      open: true,
      livereload: true,
    }))
}

const monitorFiles = done => {
  watch('src/**/*.html', () => gulp.series('appHtml')())
  watch('src/**/*.css', () => gulp.series('appCss')())
  watch('src/**/*.js', () => gulp.series('appJs')())
  watch('src/assets/imgs/**/*.*', () => gulp.series('appImg')())
  return done();
}

module.exports = {
  monitorFiles,
  server
}