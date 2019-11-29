var gulp = require("gulp")
var uglify = require("gulp-uglify")
var pipeline = require("readable-stream").pipeline
var concat = require("gulp-concat")
const imagemin = require("gulp-imagemin")

var jsSrc = "src/staticSrc/scripts/*.js"
var imgSrc = "src/staticSrc/images/**/*"

gulp.task("compressjs", function() {
  return pipeline(
    gulp.src(jsSrc),
    concat("compressed.js"),
    uglify(),
    gulp.dest("static/js/")
  )
})

gulp.task("optimizeimages", function() {
  return pipeline(gulp.src(imgSrc), imagemin(), gulp.dest("static/images/"))
})

gulp.task("default", function() {
  gulp.watch([jsSrc], ["compressjs"])
})
