const Task = require('./task');

class Tasks {
  get allTasks() {
    const tasks = [];

    Object.keys(this._tasks).forEach(key => {
      const task = this._tasks[key];
      tasks.push(task);
    });

    return tasks;
  }

  constructor() {
    this._tasks = {};
  }

  createTask(description) {
    const task = new Task(description);

    this._tasks[task.id] = task;
  }

  loadTasks(tasks = []) {
    tasks.forEach(task => {
      this._tasks[task.id] = task;
    });
  }
}

module.exports = Tasks;
