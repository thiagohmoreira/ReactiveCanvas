import gulp from 'gulp';
import clean from 'gulp-clean';
import handleErrors from '../lib/handleErrors';
import config from '../config';

const task = () =>
  gulp.src([config.root.dest], { read: false })
    .pipe(clean())
    .on('error', handleErrors);

gulp.task('clean', task);

export default task;
