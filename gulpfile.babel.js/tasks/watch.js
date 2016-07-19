import gulp from 'gulp';
import path from 'path';
import config from '../config';

var watchTask = () => {
  var watchableTasks = ['html', 'css', 'js'];

  watchableTasks.forEach(function(taskName) {
    var task = config.tasks[taskName]
    if(task) {
      var glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}')
      gulp.watch(glob, [taskName]);
    }
  })
};

gulp.task('watch', ['browserSync'], watchTask);

export default watchTask;
