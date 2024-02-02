const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)))
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  const {time, error_id, errors} = req.body;

  if (time, error_id, errors) {
    const newDiagnostics = {
      time,
      error_id,
      errors,
    }

    readAndAppend(newDiagnostics, './db/diagnostics.json')

    const response = {
      status: 'succes',
      body: newDiagnostics,
    }

    res.json(response)
  } else {
    res.json('Error in posting diagnostic')
  }
});

module.exports = diagnostics;
