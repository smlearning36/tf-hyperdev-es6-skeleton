var express = require('express');
var app = express();

// note that in memory variables are NOT normally
// how to store state on the server, but we're simplifying
// here to get a sense of express basics.
var theCount = 0;

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
   res.sendFile(__dirname + 'index.html');
});

app.get("/the-count", function (req, res) {
  console.log('incrementing the count');
  theCount += 1;
  res.json({count: theCount});
});

// listen for requests :)
app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + this.address().port);
});