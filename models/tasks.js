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

  getAllTasks() {
    console.log();
    this.allTasks.forEach((task, index) => {
      const { description, completedAt } = task;
      const number = `${index + 1}`.green;
      const status = completedAt ? 'Completada'.green : 'Pendiente'.red;
      console.log(`${number}. ${description} :: ${status}`);
    });
  }
}

module.exports = Tasks;
