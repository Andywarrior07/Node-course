require('colors');

const { inquirerMenu, pause } = require('./helpers/inquirer');

console.clear();

const main = async () => {
  console.log('hola mundo');

  let opt = '';

  do {
    opt = await inquirerMenu();

    console.log({ opt });

    if (opt !== '0') await pause();
  } while (opt !== '0');

  // pause();
};

main();
