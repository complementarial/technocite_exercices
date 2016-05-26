let express = require('express');
let morgan = require('morgan');
let exphbs = require('express-handlebars');
let renderMwr = require(`${__dirname}/middleware/render`);
let error = require(`${__dirname}/middlware/error`);

	let hbsOptions = {

		extname:".hbs"
	}; let exphbs: any

let hbs = exphbs.create(hbsOptions);
let app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(morgan('combined'));

app.use(renderMwr());
app.use(error());

//app.get('/', (req,res) => {
	//res.send('The pages are:${JSON.stringify(datas.pages')}`);
//ci desus créé une page web ou sera affiché le contenu de pages.json
//(qui) lui est stocké ds le dossier datas


module.exports = app;