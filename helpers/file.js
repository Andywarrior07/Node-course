const fs = require('fs');

const FILENAME = './db/data.json';

const save = data => {
  fs.writeFileSync(FILENAME, JSON.stringify(data));
};

const read = () => {
  if (!fs.existsSync(FILENAME)) {
    return null;
  }

  const tasks = JSON.parse(fs.readFileSync(FILENAME, { encoding: 'utf8' }));

  return tasks;
};

module.exports = {
  save,
  read,
};
