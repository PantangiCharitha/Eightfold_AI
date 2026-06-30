function createEmptyProfile() {
    return {

        full_name: "",

        emails: [],

        phones: [],

        location: {
            city: "",
            region: "",
            country: ""
        },

        links: {
            linkedin: "",
            github: "",
            portfolio: "",
            other: []
        },

        headline: "",

        years_experience: 0,

        skills: [],

        experience: [],

        education: [],

        provenance: [],

        overall_confidence: 0,

        metadata: {

            merged_sources: [],

            generated_at: "",

            pipeline_version: "1.0"

        }

    };
}

module.exports = createEmptyProfile;