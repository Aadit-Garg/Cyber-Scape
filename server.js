const express = require('express');
app = express();
let port = 3000;
app.listen(port, function () {
	console.log(`Server started on port ${port} succesfully`);
});
app.get('/chatbot', (req, res) => {
	res.sendFile(__dirname + '/bot.html');
});
app.get('/api', (req, res) => {
	res.send('Hello!');
});
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
