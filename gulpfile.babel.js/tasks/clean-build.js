import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

const task = (cb) => {
  gulpSequence('clean', 'build', cb);
}

gulp.task('clean-build', task);

export default task;
