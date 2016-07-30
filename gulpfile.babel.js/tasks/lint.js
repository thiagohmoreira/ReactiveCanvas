import gulp from 'gulp';
import eslint from 'gulp-eslint';
import config from '../config';

const lintTask = () => 
  gulp.src([
    config.root.src + '/**/*.{' + config.tasks.js.extensions + '}',
    '!node_modules/**'
  ])
  .pipe(eslint())
  .pipe(eslint.format());
  // To have the process exit with an error code (1) on
  // lint error, return the stream and pipe to failAfterError last.
  //.pipe(eslint.failAfterError());

gulp.task('lint', lintTask);

export default lintTask;
