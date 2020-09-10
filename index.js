const express = require('express')
const path = require('path')
const hbs = require('hbs');
const app = express()

app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
  res.render("home.hbs")
})

	
// Limit this route to user with usernames nik, sam, and dean

app.use('/users/:handle', function(req, res, next) {
	const handle = req.params.handle;
	switch(handle) {
		case "nik":
		case "dean":
		case "sam":
			next();
			break;
		default:
			res.send("401 Unauthorised user");
	}
})

app.get('/users/:handle', function(req, res) {
	const handle = req.params.handle
	res.render("dashboard.hbs", {userhandle: handle})
})
 
app.listen(3000, console.log("Server is up and running"))