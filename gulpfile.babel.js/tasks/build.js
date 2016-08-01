import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

const task = (cb) => {
  gulpSequence(['css', 'js'], 'html', cb);
};

gulp.task('build', task);

export default task;
