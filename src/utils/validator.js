function validateProfile(profile) {
    const errors = [];

    if (!profile.full_name) {
        errors.push("Candidate name is missing.");
    }

    if (profile.emails.length === 0) {
        errors.push("Email is missing.");
    }

    if (profile.phones.length === 0) {
        errors.push("Phone number is missing.");
    }

    return errors;
}

module.exports = validateProfile;