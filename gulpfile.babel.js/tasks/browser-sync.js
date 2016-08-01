import browserSync from 'browser-sync';
import gulp from 'gulp';
import config from '../config';

const task = () => {
  browserSync.init(config.tasks.browserSync);
};

gulp.task('browser-sync', task);
gulp.task('run', ['clean-build'], task);

export default task;
