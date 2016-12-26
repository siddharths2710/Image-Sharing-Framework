var express = require('express');
var app = express();

app.use('/bootstrap', express.static('bootstrap'));
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/jquery', express.static('jquery'));
app.use('/js', express.static('js'));
app.use('/root/Pictures', express.static('/root/Pictures'));

app.get('/', function (req, res) {
	//res.send('Hello World');
	res.sendFile(__dirname + "/index.html");
})

app.get('/*', function (req, res) {
	if (req.originalUrl.indexOf('?') != -1)
	{
	console.log(req.originalUrl.substring(0, req.originalUrl.indexOf('?')))
	res.sendFile(__dirname + req.originalUrl.substring(0, req.originalUrl.indexOf('?')));
	}
	else
	res.sendFile(__dirname + req.originalUrl);
})

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)
})
