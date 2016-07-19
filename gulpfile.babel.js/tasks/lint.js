import gulp from 'gulp';
import babel from 'gulp-babel';
import jshint from 'gulp-jshint';
import path from 'path';
import config from '../config';

var lintTask = (basePath) => {
    var srcPath = path.join(basePath, '/**/*.{' + config.tasks.js.extensions + '}');

    return () => gulp.src(srcPath)
            .pipe(babel())
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
}

gulp.task('lint', lintTask(config.root.src));
gulp.task('lint-test', lintTask(config.root.test));

export default lintTask;
