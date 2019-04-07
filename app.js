const express = require('express');
const app = express();
const port = '8090';

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('home');
});

app.listen(port, function() {
  console.log('Server is running... on port ' + port);
});
