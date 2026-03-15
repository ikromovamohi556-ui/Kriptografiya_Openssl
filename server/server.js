const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, secure world!');
});

const options = {
  key: fs.readFileSync('../server_cert/server.key'),
  cert: fs.readFileSync('../server_cert/server.crt'),
  ca: fs.readFileSync('../rootCA/rootCA.crt'),
  requestCert: true,      // Client sertifikatini talab qilish
  rejectUnauthorized: true
};

https.createServer(options, app).listen(8443, () => {
  console.log('HTTPS server running on https://localhost:8443');
});
