// server.js
// SERVER-SIDE JAVASCRIPT
var express = require('express');
var app = express();

// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
//
app.get('/', function (req, res) {
  res.sendfile('views/index.html');
});  // app.get('/'

var target = 7;
app.get('/:number', function (req, res) {
  var choice = req.params.number;
  if (choice > target) {
    res.send('Too High !!');
  }
  else if (choice < target) {
    res.send('Too Low !!');
  }
  else {
    res.send('right number');
  }
});  // app.get('/:number',

app.get('/pick-a-number', function (req, res) {
  var pick = parseInt(req.query.number);
  // var pick = req.params.pick-a-number;
  if (pick > target) {
    res.send('Too High !!');
  }
  else if (pick < target) {
    res.send('Too Low !!');
  }
  else if (pick === target) {
    res.send('right number');
  }
  else {
   console.log('Something odd happened! target:', target, typeof(target ),'pick:', pick, typeof(pick));
   response.send('Your guess is beyond compare!');
 }
});   //  app.get('/pick-a-number

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});  // pp.listen(process
