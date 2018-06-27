const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// starting the API server
app.listen(PORT, function() {
    console.log(`API Server now listening on port ${PORT}`)
});