const path = require('path');

const express = require('express');
const viewsRouter = express.Router();

viewsRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

viewsRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = viewsRouter;
