const createEmptyProfile = require("../schema/canonicalSchema");

const normalizePhone = require("../normalizers/phoneNormalizer");
const normalizeEmail = require("../normalizers/emailNormalizer");
const normalizeSkills = require("../normalizers/skillNormalizer");

function parseResume(resumeData) {
    const profile = createEmptyProfile();

    profile.full_name = resumeData.name?.trim() || "";

    if (resumeData.email) {
        profile.emails.push(
            normalizeEmail(resumeData.email)
        );
    }

    if (resumeData.phone) {
        profile.phones.push(
            normalizePhone(resumeData.phone)
        );
    }

    profile.location.country = resumeData.location || "";

    profile.skills = normalizeSkills(
        resumeData.skills || []
    );

    profile.education = resumeData.education || [];

    profile.provenance.push({
        source: "Resume",
        fields: Object.keys(resumeData),
        confidence: 0.90,
        method: "normalized_mapping"
    });

    return profile;
}

module.exports = parseResume;