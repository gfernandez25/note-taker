const express = require('express');
const bodyParser = require('body-parser');
const server = express();

const viewsRoutes = require('./routes/views.route');
const apiRoutes = require('./routes/api.route');

// server deppendencies
server.use(bodyParser.json());

// static folders
server.use(express.static('public'))
server.use(express.static('db'))

//routes
server.use(viewsRoutes);
server.use('/api/notes', apiRoutes);

// server
server.listen(process.env.PORT || 3000, () => {
    console.log(`API server now on port 3000!`);
});