const createEmptyProfile = require("../schema/canonicalSchema");
const normalizeSkills = require("../normalizers/skillNormalizer");

function parseGithub(data) {
    const profile = createEmptyProfile();

    profile.links.github = data.profile || "";

    profile.skills = normalizeSkills(data.languages || []);

    profile.provenance.push({
        source: "GitHub",
        confidence: 0.80,
        method: "normalized_mapping"
    });

    return profile;
}

module.exports = parseGithub;