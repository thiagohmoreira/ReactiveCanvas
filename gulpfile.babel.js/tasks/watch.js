import gulp from 'gulp';
import path from 'path';
import config from '../config';

const task = () => {
  let watchableTasks = ['html', 'css', 'js'];

  watchableTasks.forEach(function(taskName) {
    let task = config.tasks[taskName];
    if(task) {
      let glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}');
      gulp.watch(glob, [taskName]);
    }
  });
};

gulp.task('watch', ['run'], task);

export default task;
