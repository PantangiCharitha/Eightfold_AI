const express = require("express");

const router = express.Router();
const fetchGithubProfile =
require("../services/githubFetcher");

const transformCandidate =
require("../pipeline/transformCandidate");

const config =
require("../../config/defaultConfig.json");

router.post("/transform", (req, res) => {

    try{

        const result = transformCandidate(
            req.body,
            config
        );

        res.json(result);

    }

    catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

});
router.post("/github-profile", async (req, res) => {

    try {

        const github = await fetchGithubProfile(
            req.body.url
        );

        res.json(github);

    }

    catch (err) {

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

});


module.exports = router;
