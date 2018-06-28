// routing for the server
const path = require('path');
const express = require("express");
const router = express.Router();
const apiRoutes = require('./api');

// api routes
router.use("/api", apiRoutes);

// html routes
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

module.exports = router;