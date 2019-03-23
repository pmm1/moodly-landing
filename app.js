
const forceDomain = require('forcedomain');
const express = require('express');
const app = express();
const path = require('path');


const publicPath = path.join(__dirname, 'public');

app.use('/', express.static(publicPath));


app.use(forceDomain({
  hostname: 'moodly.cc'
}));


let filename = process.cwd() + "/index.html";


app.get('/', function(req, res) {
  res.sendFile(filename);
});



const {
  PORT: port = 8080,
  HOST: host = 'localhost',
} = process.env;

app.listen(port, () => {
  console.info(`Server running at http://${host}:${port}/`);
});
