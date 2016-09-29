'use strict';

const express = require('express');
const app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  console.log('request to server root');
  res.sendFile(__dirname + 'index.html')
});

// listen for requests :)
app.listen(process.env.PORT, () => console.log(
  `Your app is listening on port ${process.env.PORT}`));
