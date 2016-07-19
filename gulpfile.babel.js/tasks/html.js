import gulp from 'gulp';
import browserSync from 'browser-sync';
import inject from 'gulp-inject';
import path from 'path';
import handleErrors from '../lib/handleErrors';
import config from '../config';

var paths = {
  src: path.join(config.root.src, config.tasks.html.src, config.tasks.html.entry),
  dest: config.root.dest,
  injectionSrc: path.join(config.root.dest, '/**/*.{' + config.tasks.html.injectExtensions + '}'),
  ignorePath: path.normalize(config.root.dest)
}

var htmlTask = () => {
    var sources = gulp.src([paths.injectionSrc], { read: false });

    var injectOptions = {
      ignorePath: [paths.ignorePath],
      addRootSlash: false,
      removeTags: true
    };

    return gulp.src(paths.src)
      .pipe(inject(sources, injectOptions))
      .pipe(gulp.dest(paths.dest))
      .pipe(browserSync.stream());
};

gulp.task('html', htmlTask);

export default htmlTask;
