import browserSync from 'browser-sync';
import browserify from 'browserify';
import gulp from 'gulp';
import gutil from 'gulp-util';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import path from 'path';
import handleErrors from '../lib/handleErrors';
import config from '../config';

var paths = {
  entries: [],
  dest: path.join(config.root.dest, config.tasks.js.dest)
};

for (var entryFile of config.tasks.js.entries.app) {
  paths.entries.push(
    path.join(config.root.src, config.tasks.js.src, entryFile)
  );
}

var jsTask = () => {
  return browserify(Object.assign(
      { entries: paths.entries },
      config.tasks.js.browserify
    ))
    .bundle()

    .on('log', gutil.log)
    .on('error', handleErrors)

    .pipe(source(config.root.outputFileName + '.js'))
    .pipe(buffer())

    //Source Maps
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))

    //Output
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task('js', jsTask);

export default jsTask;
