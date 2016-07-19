import gulp from 'gulp';
import clean from 'gulp-clean';
import handleErrors from '../lib/handleErrors';
import config from '../config';

var cleanTask = () =>
    gulp.src([config.root.dest], { read: false })
      .pipe(clean())
      .on('error', handleErrors);

gulp.task('clean', cleanTask);

export default cleanTask;
