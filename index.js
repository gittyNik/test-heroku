const express = require('express')
var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let people = [];

app.get('/', function (req, res) {// creates and sends response
  res.send(people)
})

app.post('/', function (req, res) {
  let { name } = req.body;
  let { age } = req.body;
  let person = {
    name,
    age,
  }
  people.push(person);
  res.send(people)
})


app.listen(3000, console.log('Server is running on port 3000'))


// ip:port - domain name

// 127.0.0.1 - localhost
// 3000 - port

// protocol://domain-name/localPath

// https://www.npmjs.com/package/express

// https://www.npmjs.com/

// http://127.0.0.1:3000/