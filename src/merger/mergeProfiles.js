const getSourceConfidence = require("./confidence");


function mergeProfiles(profiles) {
    const merged = JSON.parse(JSON.stringify(profiles[0]));
merged.metadata = merged.metadata || {};

merged.metadata.merge_strategy = {
    name: "Highest Confidence",
    email: "Union + Deduplication",
    phone: "Union + Deduplication",
    skills: "Union + Deduplication",
    experience: "Append",
    education: "Append"
};
    // Start with an empty merged profile
    
    let bestNameConfidence =
    getSourceConfidence(
        merged.provenance[0]?.source
    ).score;

    for (let i = 1; i < profiles.length; i++) {

        const profile = profiles[i];

        const source = profile.provenance[0]?.source;
        const confidenceInfo = getSourceConfidence(source);
const confidence = confidenceInfo.score;

        // -----------------------------
        // Name (Highest confidence wins)
        // -----------------------------
       if (profile.full_name && confidence > bestNameConfidence) {

    merged.full_name = profile.full_name;
    bestNameConfidence = confidence;

    merged.metadata.name_selected_from = {
        source,
        confidence,
         reason: confidenceInfo.reason
    };
}

        // -----------------------------
        // Emails (Merge + Remove duplicates)
        // -----------------------------
        merged.emails = [
            ...new Set([
                ...merged.emails,
                ...profile.emails
            ])
        ];

        // -----------------------------
        // Phones
        // -----------------------------
        merged.phones = [
            ...new Set([
                ...merged.phones,
                ...profile.phones
            ])
        ];

        // -----------------------------
        // Skills
        // -----------------------------
        merged.skills = [
            ...new Set([
                ...merged.skills,
                ...profile.skills
            ])
        ];

        // -----------------------------
        // Experience
        // -----------------------------
        merged.experience.push(...profile.experience);

        // -----------------------------
        // Education
        // -----------------------------
        merged.education.push(...profile.education);

        // -----------------------------
        // Provenance
        // -----------------------------
        merged.provenance.push(...profile.provenance);

        // -----------------------------
        // LinkedIn
        // -----------------------------
        if (!merged.links.linkedin && profile.links.linkedin) {
            merged.links.linkedin = profile.links.linkedin;
        }

        // -----------------------------
        // GitHub
        // -----------------------------
        if (!merged.links.github && profile.links.github) {
            merged.links.github = profile.links.github;
        }

        // -----------------------------
        // Portfolio
        // -----------------------------
        if (!merged.links.portfolio && profile.links.portfolio) {
            merged.links.portfolio = profile.links.portfolio;
        }

        // -----------------------------
        // Headline
        // -----------------------------
        if (!merged.headline && profile.headline) {
            merged.headline = profile.headline;
        }

        // -----------------------------
        // Years of Experience
        // -----------------------------
        merged.years_experience = Math.max(
            merged.years_experience,
            profile.years_experience
        );
    }

    // -----------------------------
    // Overall Confidence
    // -----------------------------
   const totalConfidence = merged.provenance.reduce(
    (sum, item) => sum + (item.confidence || 0),
    0
);

const averageConfidence =
    totalConfidence / merged.provenance.length;

let completeness = 0;

if (merged.full_name) completeness += 0.15;
if (merged.emails.length) completeness += 0.15;
if (merged.phones.length) completeness += 0.15;
if (merged.skills.length) completeness += 0.20;
if (merged.education.length) completeness += 0.15;
if (merged.links.linkedin) completeness += 0.10;
if (merged.links.github) completeness += 0.10;

merged.overall_confidence = Number(
    ((averageConfidence * 0.7) + (completeness * 0.3))
        .toFixed(2)
);
merged.metadata.confidence = {
    average_source_confidence: Number(averageConfidence.toFixed(2)),
    completeness_score: Number(completeness.toFixed(2)),
    weighting: {
        source_confidence: 70,
        completeness: 30
    }
};

// Metadata
merged.metadata.merged_sources = [
    ...new Set(
        merged.provenance
            .map(item => item.source)
            .filter(Boolean)
    )
];

merged.metadata.generated_at =
    new Date().toISOString();
    merged.metadata.pipeline = {
    version: "1.0",
    parser_count: profiles.length,
    merger: "Confidence Based",
    projection: "Config Driven"
};
    merged.metadata.statistics = {
    total_sources: profiles.length,
    total_skills: merged.skills.length,
    total_emails: merged.emails.length,
    total_phones: merged.phones.length,
    total_experience_entries: merged.experience.length,
    total_education_entries: merged.education.length
};

    return merged;
}

module.exports = mergeProfiles;