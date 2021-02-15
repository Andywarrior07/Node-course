const fs = require('fs');

const save = data => {
  const fileName = './db/data.json';
  fs.writeFileSync(fileName, JSON.stringify(data));
};

module.exports = {
  save,
};
