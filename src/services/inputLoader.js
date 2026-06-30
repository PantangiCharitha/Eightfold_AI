const fs = require("fs");

function loadJSON(path) {
    return JSON.parse(
        fs.readFileSync(path, "utf8")
    );
}

function loadText(path) {
    return fs.readFileSync(path, "utf8");
}

module.exports = {
    loadJSON,
    loadText
};