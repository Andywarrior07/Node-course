require('colors');

const {
  inquirerMenu,
  pause,
  readInput,
  listDeleteTaskMessage,
  confirm,
  showChecklist,
} = require('./helpers/inquirer');
const { save, read } = require('./helpers/file');
const Tasks = require('./models/tasks');

const main = async () => {
  let opt = '';
  const tasks = new Tasks();

  const tasksLoaded = read();

  if (tasksLoaded) {
    tasks.loadTasks(tasksLoaded);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const description = await readInput('Descripcion: ');
        tasks.createTask(description);
        break;
      case '2':
        tasks.getAllTasks();
        break;
      case '3':
        tasks.getAllTasksByStatus();
        break;
      case '4':
        tasks.getAllTasksByStatus(false);
        break;
      case '5':
        const ids = await showChecklist(tasks.allTasks);
        tasks.updateTask(ids);
        break;
      case '6':
        const id = await listDeleteTaskMessage(tasks.allTasks);

        if (id === '0') {
          break;
        }

        const ok = await confirm('Estas seguro?');

        if (!ok) {
          break;
        }

        tasks.deleteTask(id);
        break;
    }

    save(tasks.allTasks);

    await pause();
  } while (opt !== '0');
};

main();
