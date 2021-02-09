const gulp = require('gulp');
const { series, parallel } = require('gulp');

const {
  appHtml,
  appCss,
  appJs,
  appImg
} = require('./gulpTasks/app');

const {
  depsCss,
  depsFonts
} = require('./gulpTasks/deps');

const {
  monitorFiles,
  server
} = require('./gulpTasks/server');

module.exports.default = series(
  parallel(
    series(
      appHtml,
      appCss,
      appJs,
      appImg,
    ),
    series(
      depsCss,
      depsFonts
    )
  ),
  server,
  monitorFiles
)