import browserSync from 'browser-sync';
import gulp from 'gulp';
import config from '../config';

var browserSyncTask = () => {
    browserSync.init(config.tasks.browserSync);
};

gulp.task('browserSync', browserSyncTask);

export default browserSyncTask;
