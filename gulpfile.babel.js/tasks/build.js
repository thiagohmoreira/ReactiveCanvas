import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

var buildTask = (cb) => {
  gulpSequence(['css', 'lint', 'js'], 'html', cb);
}

gulp.task('build', buildTask);

export default buildTask;
