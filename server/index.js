const express = require('express');
const app = express()
app.use(express.urlencoded({ limit: '5mb' }));
app.use(express.json({ limit: '5mb' }));
module.exports = {
    handler: app
}