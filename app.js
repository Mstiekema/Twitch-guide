var path = require('path');
var express = require('express')
var app = express()

app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
	res.render('index.html')
})

app.get('/over', function (req, res) {
	res.render('watistwitch.html')
})

app.get('/layout', function (req, res) {
	res.render('twitchlayout.html')
})

app.get('/chat', function (req, res) {
	res.render('chat.html')
})

app.get('/plugins', function (req, res) {
	res.render('plugins.html')
})


app.listen(2000, function () {
	console.log('Running the Twitch guide website!')
})
