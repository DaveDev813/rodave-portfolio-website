var gulp = require("gulp")
var uglify = require("gulp-uglify")
var pipeline = require("readable-stream").pipeline
var concat = require("gulp-concat")

gulp.task("compress", function() {
  return pipeline(
    gulp.src("static/js/src/*.js"),
    concat("compressed.js"),
    uglify(),
    gulp.dest("static/js/")
  )
})

gulp.task("default", function() {
  gulp.watch(["static/js/src/*.js"], ["compress"])
})
