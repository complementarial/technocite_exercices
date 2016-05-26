let express = require('express');
let morgan = require('morgan');
let renderMwr = require(`${__dirname}/middleware/render`);
let error = require(`${__dirname}/middlware/error)`;

let fs = require('fs');

let datas =JSON.parse(fs.readFileSync(`${process.cdw()}/data/page.json`,'utf8'));

let app = express();
app.use(morgan('combined'));

app.use(renderMwr());
app.use(error());

//app.get('/', (req,res) => {
	//res.send('The pages are:${JSON.stringify(datas.pages')}`);
//ci desus créé une page web ou sera affiché le contenu de pages.json
//(qui) lui est stocké ds le dossier datas


module.exports = app;