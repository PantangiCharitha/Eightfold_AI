const parseResume = require("../parsers/resumeParser");
const parseLinkedIn = require("../parsers/linkedinParser");
const parseGithub = require("../parsers/githubParser");
const parseRecruiter = require("../parsers/recruiterParser");

const mergeProfiles = require("../merger/mergeProfiles");
const projectOutput = require("../projection/projectOutput");
const validateProfile = require("../utils/validator");

function transformCandidate(inputs, config) {

    const profiles = [];

    if (inputs.resume)
        profiles.push(parseResume(inputs.resume));

    if (inputs.linkedin)
        profiles.push(parseLinkedIn(inputs.linkedin));

    if (inputs.github)
        profiles.push(parseGithub(inputs.github));

    if (inputs.recruiter)
        profiles.push(parseRecruiter(inputs.recruiter));

    const merged = mergeProfiles(profiles);

    const validation = validateProfile(merged);

    const output = projectOutput(merged, config);

    return {

        success: validation.length === 0,

        validation,

        output

    };

}

module.exports = transformCandidate;