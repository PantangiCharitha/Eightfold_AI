const axios = require("axios");

async function fetchGithubProfile(url) {
    const username = url
        .replace("https://github.com/", "")
        .replace(/\/$/, "");

    const user = await axios.get(
        `https://api.github.com/users/${username}`
    );

    const repos = await axios.get(
        `https://api.github.com/users/${username}/repos`
    );

    const languages = [
        ...new Set(
            repos.data
                .map(repo => repo.language)
                .filter(Boolean)
        )
    ];

    return {
        profile: user.data.html_url,
        languages
    };
}

module.exports = fetchGithubProfile;