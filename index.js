const express = require('express')
const app = express()
// Get route
app.get('/', function (req, res) {
  res.send('Hello World')
})
// post route
app.post('/', (req, res) => {
	  res.send('post Hello World')
});

// Patch  route
app.patch('/', (req, res) => {
	  res.send('patch Hello World');
});

// Delete route
app.delete('/', (req, res) => {
	  res.send('delele Hello World');
});

app.listen(3000, console.log('Example app listening on port 3000!'));

// ip => localhost -> localhost:3000

//url => protocol://host:port/path?query => http://localhost:3000/