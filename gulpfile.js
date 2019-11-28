var gulp = require("gulp")
var uglify = require("gulp-uglify")
var pipeline = require("readable-stream").pipeline
var concat = require("gulp-concat")

var jsSrc = "static/js/src/*.js"

gulp.task("compress", function() {
  return pipeline(
    gulp.src(jsSrc),
    concat("compressed.js"),
    uglify(),
    gulp.dest("static/js/")
  )
})

gulp.task("default", function() {
  gulp.watch([jsSrc], ["compress"])
})
