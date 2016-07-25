import gulp from 'gulp';
import eslint from 'gulp-eslint';
import config from '../config';

var lintTask = (basePath) => {
  return () => gulp.src(
    [
      basePath + '/**/*.{' + config.tasks.js.extensions + '}',
      '!node_modules/**'
    ])
    .pipe(eslint())
    .pipe(eslint.format());
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    //.pipe(eslint.failAfterError());
};

gulp.task('lint', lintTask(config.root.src));
gulp.task('lint-test', lintTask(config.root.test));

export default lintTask;
