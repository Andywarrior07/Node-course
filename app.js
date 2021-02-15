require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

const main = async () => {
  let opt = '';
  const tasks = new Tasks();

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

    await pause();
  } while (opt !== '0');
};

main();
