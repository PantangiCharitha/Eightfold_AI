const confidenceConfig = require("../../config/sourceConfidence.json");

function getSourceConfidence(source) {
    return (
        confidenceConfig[source] || {
            score: 0.50,
            reason: "Unknown source"
        }
    );
}

module.exports = getSourceConfidence;