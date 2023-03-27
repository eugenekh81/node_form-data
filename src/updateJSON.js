'use strict';

const fs = require('fs');

const updateJSON = (newData) => {
  let dataFromJSON = {};

  try {
    const inputJSON = fs.readFileSync('src/public/expenses.json');
    dataFromJSON = JSON.parse(inputJSON.toString());
    dataFromJSON.expenses.push(newData);

    const outputJSON = JSON.stringify(dataFromJSON);

    fs.writeFileSync('src/public/expenses.json', outputJSON);

    return outputJSON;
  } catch {
    console.log('Oops, something went wrong')
  }
};

module.exports = updateJSON;