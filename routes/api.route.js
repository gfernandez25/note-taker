const uniqid = require('uniqid');
const path = require('path');
const dbPath = path.resolve(__dirname, '../db/db.json');
const fileUtil = require('../utils/file.utils');

const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    const notes = fileUtil.readNotes(dbPath);
    const response = JSON.parse(notes);
    res.json(response)
});

apiRouter.post('/', (req, res) => {
    const notes = fileUtil.readNotes(dbPath);
    let response = JSON.parse(notes);
    response.push({
        id: uniqid(),
        ...req.body
    })

    res.json(response)

    fileUtil.writeNotes(dbPath, JSON.stringify(response))
});


apiRouter.get('/:id', (req, res) => {
    const notes = fileUtil.readNotes(dbPath);
    const result = notes.filter(note => note.id === req.params.id)[0];

    if (result) {
        res.json(result);
    }
});

apiRouter.delete('/:id', (req, res) => {
    const notes = fileUtil.readNotes(dbPath);
    const response = JSON.parse(notes).filter( note => note.id !== req.params.id);

    if (response) {
        res.json(response)
        fileUtil.writeNotes(dbPath, JSON.stringify(response))
    }
});

module.exports = apiRouter;
