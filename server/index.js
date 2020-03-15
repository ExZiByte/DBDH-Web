const express = require('express');
const https = require('https');
const parser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 80 || 8080;
const fs = require('fs');

const app = express();

// Middleware

app.use(parser.json());
app.use(cors());

const warnings = require('./routes/api/warnings');

app.use('/api/warnings', warnings)


// https.createServer({
// key: fs.readFileSync('/etc/letsencrypt/live/entity.nestedvar.dev/privkey.pem'),
// cert: fs.readFileSync('/etc/letsencrypt/live/entity.nestedvar.dev/cert.pem'),
// passphrase: '5fdp5fdp'
// },app).listen(port, () => console.log(`Server started on port ${port}`))

app.listen(port)