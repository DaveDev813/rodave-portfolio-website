const { src, dest, watch, parallel } = require("gulp")
var uglify = require("gulp-uglify")
var concat = require("gulp-concat")
const imagemin = require("gulp-imagemin")

var jsSrc = "src/staticSrc/scripts/*.js"
var imgSrc = "src/staticSrc/images/**/*"

function compressjs() {
  return src(jsSrc)
    .pipe(concat("compressed.js"))
    .pipe(uglify())
    .pipe(dest("static/js/"))
}

function optimizeimages() {
  return src(imgSrc)
    .pipe(imagemin())
    .pipe(dest("static/images/"))
}

function watchAssets() {
  watch([jsSrc], {}, parallel(compressjs))
}

exports.compressjs = compressjs
exports.optimizeimages = optimizeimages
exports.default = watchAssets
