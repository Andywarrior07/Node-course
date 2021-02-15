require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { save, read } = require('./helpers/file');
const Tasks = require('./models/tasks');

const main = async () => {
  let opt = '';
  const tasks = new Tasks();

  const tasksLoaded = read();

  if (tasksLoaded) {
    tasks.loadTasks(tasksLoaded);
  }

  await pause();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const description = await readInput('Descripcion: ');
        tasks.createTask(description);
        break;
      case '2':
        console.log(tasks.allTasks);
        break;
      case '3':
        break;
    }

    save(tasks.allTasks);

    await pause();
  } while (opt !== '0');
};

main();
