var gulp = require("gulp");
var minifycss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var htmlmin = require("gulp-htmlmin");
var htmlclean = require("gulp-htmlclean");
var imagemin = require("gulp-imagemin");

// 压缩css文件
gulp.task("minify-css", function () {
  return gulp
    .src("./public/**/*.css")
    .pipe(minifycss())
    .pipe(gulp.dest("./public"));
});

// 压缩html
gulp.task("minify-html", function () {
  return gulp
    .src("./public/**/*.html")
    .pipe(htmlclean())
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        ignoreCustomFragments: [/\{\{[\s\S]*?\}\}/],
      })
    )
    .pipe(gulp.dest("./public"));
});

// 压缩js文件
gulp.task("minify-js", function () {
  return gulp
    .src(["./public/**/*.js", "!./public/js/**/*min.js"])
    .pipe(uglify())
    .pipe(gulp.dest("./public"));
});

// 压缩图片
gulp.task("minify-images", function () {
  return gulp
    .src([
      "./public/**/*.png",
      "./public/**/*.jpg",
      "./public/**/*.gif",
      "./public/**/*.svg",
    ])
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest("./public"));
});

gulp.task(
  "default",
  gulp.series(
    gulp.parallel("minify-html", "minify-css", "minify-js", "minify-images")
  )
);
