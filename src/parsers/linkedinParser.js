const createEmptyProfile = require("../schema/canonicalSchema");
const normalizePhone = require("../normalizers/phoneNormalizer");
const normalizeEmail = require("../normalizers/emailNormalizer");
const normalizeSkills = require("../normalizers/skillNormalizer");

function parseLinkedIn(data) {
    const profile = createEmptyProfile();

    profile.full_name = data.fullName?.trim() || "";

    profile.emails = (data.emails || []).map(normalizeEmail);

    profile.phones = (data.phones || []).map(normalizePhone);

    profile.headline = data.headline || "";

    profile.years_experience = data.experience || 0;

    profile.skills = normalizeSkills(data.skills || []);

    profile.links.linkedin = data.profile || "";

    profile.provenance.push({
        source: "LinkedIn",
        confidence: 0.95,
        method: "normalized_mapping"
    });

    return profile;
}

module.exports = parseLinkedIn;