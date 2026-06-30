const { SKILL_MAP } = require("../utils/constants");

function normalizeSkills(skills = []) {
    const normalized = skills.map(skill => {
        const key = skill.trim().toLowerCase();
        return SKILL_MAP[key] || skill.trim();
    });

    return [...new Set(normalized)];
}

module.exports = normalizeSkills;