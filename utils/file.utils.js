const fs = require('fs');

function readNotes(url) {
    return fs.readFileSync(url);
}

function writeNotes(url, data) {
    return fs.writeFileSync(url, data);
}

module.exports = {
    readNotes,
    writeNotes
};
