const createEmptyProfile = require("../schema/canonicalSchema");

function parseRecruiter(text) {

    const profile = createEmptyProfile();

    const lower = text.toLowerCase();

    // ------------------------
    // Preferred Location
    // ------------------------
    const locationMatch = text.match(/preferred location[:\s]+([A-Za-z ]+)/i);

    if (locationMatch) {
        profile.location.city = locationMatch[1].trim();
    }

    // ------------------------
    // Skills
    // ------------------------
    if (lower.includes("react")) {
        profile.skills.push("React");
    }

    if (lower.includes("frontend")) {
        profile.skills.push("Frontend");
    }

    if (lower.includes("backend")) {
        profile.skills.push("Backend");
    }

    // ------------------------
    // Communication
    // ------------------------
    if (lower.includes("good communication")) {

        profile.provenance.push({
            field: "communication",
            value: "Good",
            source: "Recruiter",
            confidence: 0.60,
            normalized: true
        });

    }

    // ------------------------
    // Salary
    // ------------------------
    if (lower.includes("negotiable")) {

        profile.provenance.push({
            field: "salary",
            value: "Negotiable",
            source: "Recruiter",
            confidence: 0.60,
            normalized: true
        });

    }

    profile.provenance.push({
        source: "Recruiter",
        confidence: 0.60,
        method: "text_extraction"
    });

    return profile;
}

module.exports = parseRecruiter;