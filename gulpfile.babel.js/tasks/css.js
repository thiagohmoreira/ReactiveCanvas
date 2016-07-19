import gulp from 'gulp';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import inject from 'gulp-inject';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import path from 'path';
import cssnano from 'gulp-cssnano';
import handleErrors from '../lib/handleErrors';
import config from '../config';

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
  entry: path.join(config.root.src, config.tasks.css.src, config.tasks.css.entry),
  dest: path.join(config.root.dest, config.tasks.css.dest)
}

var cssTask = () => {
    var injectAppFiles = gulp.src([
        paths.src,
        '!' + paths.entry
    ], {read: false});

    var injectAppOptions = {
      transform: function(filepath) {
          return '@import "' + filepath + '"';
      },
      starttag: '// inject:app',
      endtag: '// endinject',
      addRootSlash: false,
      removeTags: true
    };

  return gulp.src(paths.entry)
    .pipe(inject(injectAppFiles, injectAppOptions))
    .pipe(sourcemaps.init())
    .pipe(sass(config.tasks.css.sass))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.tasks.css.autoprefixer))
    //.pipe(cssnano({autoprefixer: false}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task('css', cssTask);

export default cssTask;
