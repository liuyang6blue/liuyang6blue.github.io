<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>// build time:Sun Feb 23 2020 00:52:16 GMT+0800 (GMT+08:00)
var gulp=require("gulp");var minifycss=require("gulp-minify-css");var uglify=require("gulp-uglify");var htmlmin=require("gulp-htmlmin");var htmlclean=require("gulp-htmlclean");gulp.task("minify-css",function(){return gulp.src("./public/**/*.css").pipe(minifycss()).pipe(gulp.dest("./public"))});gulp.task("minify-html",function(){return gulp.src("./public/**/*.html").pipe(htmlclean()).pipe(htmlmin({removeComments:true,minifyJS:true,minifyCSS:true,minifyURLs:true})).pipe(gulp.dest("./public"))});gulp.task("minify-js",function(){return gulp.src(["./public/**/*.js","!./public/**/*.min.js"]).pipe(uglify()).pipe(gulp.dest("./public"))});gulp.task("default",gulp.parallel("minify-html","minify-css","minify-js",function(){}));
//rebuild by neat 