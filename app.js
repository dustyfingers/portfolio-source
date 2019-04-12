const express = require('express');
const app = express();
const port = '8070';

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});


app.listen(port, function() {
  console.log('Server is running... on port ' + port);
});
