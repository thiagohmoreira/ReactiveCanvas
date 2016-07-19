import browserSync from 'browser-sync';
import gulp from 'gulp';
import config from '../config';

let task = () => {
    browserSync.init(config.tasks.browserSync);
};

gulp.task('browser-sync', task);

export default task;
