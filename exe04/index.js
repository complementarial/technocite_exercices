const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
//const path = require('path');

const root=process.cwd();
app.engine('express-handlebars',exphbs({defaultLayout :'main'}));
app.set('view engine','hbs');
app.use(express.static('public'));


app.get('/', function (req, res) {
	/*res.status(200);
	res.sendFile(`${root}/public/index.html`);
	//res.send('Hello World!');
});

app.get('/page', function (req, res){
	res.status(200);*/
	res.render('home');
});

app.get('page')

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});