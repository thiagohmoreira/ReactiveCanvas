import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

var defaultTask = (cb) => {
  gulpSequence('clean', ['css', 'lint', 'js'], 'html', cb);
}

gulp.task('build', defaultTask);

export default defaultTask;
