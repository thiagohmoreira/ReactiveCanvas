import "babel-polyfill";
import requireDir from 'require-dir';

// Require all tasks in ./tasks, including subfolders
requireDir('./tasks', { recurse: true });
