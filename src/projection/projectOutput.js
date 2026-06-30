function getValue(obj, path) {
    return path
        .replace(/\[(\d+)\]/g, ".$1")
        .split(".")
        .reduce((acc, key) => acc?.[key], obj);
}

function projectOutput(profile, config) {

    const output = {};

    // -----------------------------
    // Config Driven Projection
    // -----------------------------
    for (const field of config.fields) {

        let value = getValue(profile, field.from);

        if (value === undefined) {
            value = config.onMissing;
        }

        output[field.path] = value;
    }

    // -----------------------------
    // Confidence
    // -----------------------------
    if (config.includeConfidence) {
        output.overall_confidence = profile.overall_confidence;
    }

    // -----------------------------
    // Provenance
    // -----------------------------
    if (config.includeProvenance) {
        output.provenance = profile.provenance;
    }

    // -----------------------------
    // Metadata
    // -----------------------------
    output.metadata = profile.metadata || {};

    // -----------------------------
    // Statistics
    // -----------------------------
    output.statistics = {

        total_sources:
            profile.metadata?.merged_sources?.length || 0,

        total_skills:
            profile.skills?.length || 0,

        total_emails:
            profile.emails?.length || 0,

        total_phones:
            profile.phones?.length || 0,

        experience_entries:
            profile.experience?.length || 0,

        education_entries:
            profile.education?.length || 0

    };

    // -----------------------------
    // Explainability
    // -----------------------------
    output.explainability = {

        candidate_name: {
            selected_from:
                profile.metadata?.name_selected_from?.source ||
                "Resume",

            confidence:
                profile.metadata?.name_selected_from?.confidence ||
                0.90,

            reason:
                profile.metadata?.name_selected_from?.reason ||
                "Highest confidence source"
        },

        email: {
            strategy: "Highest Confidence"
        },

        phone: {
            strategy: "Highest Confidence"
        },

        skills: {
            strategy: "Union + Deduplication"
        }

    };

    return output;
}

module.exports = projectOutput;