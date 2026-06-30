const fs = require("fs");

function saveOutput(path, data) {

    fs.writeFileSync(
        path,
        JSON.stringify(data, null, 2)
    );

}

module.exports = saveOutput;