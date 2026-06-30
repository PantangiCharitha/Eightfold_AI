const fs = require("fs");

const parseResume = require("./src/parser/resumeParser");
const parseLinkedIn = require("./src/parser/linkedinParser");
const parseGithub = require("./src/parser/githubParser");
const parseRecruiter = require("./src/parser/recruiterParser");

const mergeProfiles = require("./src/merger/mergeProfiles");
const projectOutput = require("./src/projection/projectOutput");
const validateProfile = require("./src/utils/validator");

console.log("=========================================");
console.log(" Eightfold AI Candidate Transformer");
console.log("=========================================\n");

// ----------------------------
// Load Input Files
// ----------------------------
console.log("📄 Loading Resume...");
const resume = JSON.parse(
    fs.readFileSync("./sample-input/resume.json", "utf8")
);
console.log("✅ Resume Loaded\n");

console.log("📄 Loading LinkedIn...");
const linkedin = JSON.parse(
    fs.readFileSync("./sample-input/linkedin.json", "utf8")
);
console.log("✅ LinkedIn Loaded\n");

console.log("📄 Loading GitHub...");
const github = JSON.parse(
    fs.readFileSync("./sample-input/github.json", "utf8")
);
console.log("✅ GitHub Loaded\n");

console.log("📄 Loading Recruiter Notes...");
const recruiterNotes = fs.readFileSync(
    "./sample-input/recruiter.txt",
    "utf8"
);
console.log("✅ Recruiter Notes Loaded\n");

console.log("📄 Loading Projection Config...");
const config = JSON.parse(
    fs.readFileSync("./config/defaultConfig.json", "utf8")
);
console.log("✅ Configuration Loaded\n");

// ----------------------------
// Parse
// ----------------------------
console.log("⚙️ Parsing Sources...");

const resumeProfile = parseResume(resume);
const linkedinProfile = parseLinkedIn(linkedin);
const githubProfile = parseGithub(github);
const recruiterProfile = parseRecruiter(recruiterNotes);

console.log("✅ Parsing Completed\n");

// ----------------------------
// Merge
// ----------------------------
console.log("🔀 Merging Candidate Profiles...");

const mergedProfile = mergeProfiles([
    resumeProfile,
    linkedinProfile,
    githubProfile,
    recruiterProfile
]);

console.log("✅ Merge Completed\n");

// ----------------------------
// Validate
// ----------------------------
console.log("🔍 Validating Candidate Profile...");

const validationErrors = validateProfile(mergedProfile);

if (validationErrors.length > 0) {
    console.log("⚠ Validation Errors:");
    validationErrors.forEach(error => {
        console.log(" - " + error);
    });
} else {
    console.log("✅ Validation Passed");
}

console.log("");

// ----------------------------
// Projection
// ----------------------------
console.log("📤 Projecting Final Output...");

const finalOutput = projectOutput(
    mergedProfile,
    config
);

console.log("✅ Projection Completed\n");

// ----------------------------
// Save Output
// ----------------------------
const output = JSON.stringify(finalOutput, null, 2);

fs.writeFileSync(
    "./sample-output/output.json",
    output
);

console.log("✅ Output saved to sample-output/output.json\n");

// ----------------------------
// Display Output
// ----------------------------
console.log("=========== FINAL OUTPUT ===========\n");
console.log(output);