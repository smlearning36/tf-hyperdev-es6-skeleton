'use strict';

const express = require('express');
const app = express();

// note that in memory variables are NOT normally
// how to store state on the server, but we're simplifying
// here to get a sense of express basics.
let theCount = 0;

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => res.sendFile(__dirname + 'index.html'));


app.get("/the-count", (req, res) => {
  console.log('incrementing the count');
  theCount += 1;
  console.log(`the count is ${theCount}`);
  res.json({count: theCount});
});

// listen for requests :)
app.listen(process.env.PORT, () => console.log(
  `Your app is listening on port ${process.env.PORT}`));
