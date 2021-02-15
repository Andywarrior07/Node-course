const inquirer = require('inquirer');
require('colors');

const MENU_OPTIONS = [
  {
    type: 'list',
    name: 'option',
    message: 'Que desea hacer?',
    choices: [
      {
        value: '1',
        name: '1. Crear tarea',
      },
      {
        value: '2',
        name: '2. Listar tarea',
      },
      {
        value: '3',
        name: '3. Listar tareas completadas',
      },
      {
        value: '4',
        name: '4. Listar tareas pendientes',
      },
      {
        value: '5',
        name: '5. Completar tarea(s)',
      },
      {
        value: '6',
        name: '6. Borrar tarea',
      },
      {
        value: '0',
        name: '0. Salir',
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();

  console.log('================================'.green);
  console.log('     Selecciona una opcion'.green);
  console.log('================================\n'.green);

  const { option } = await inquirer.prompt(MENU_OPTIONS);

  return option;
};

const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presiones ${'ENTER'.green} para continuar`,
    },
  ];
  console.log('\n');
  await inquirer.prompt(question);
};

module.exports = {
  inquirerMenu,
  pause,
};
