/*
function getParameters()
{
var urlParams,
match,
pl = /+/g, // Regex for replacing addition symbol with a space
search = /([^&=]+)=?([^&]*)/g,
decode = function (s) { return decodeURIComponent(s.replace(pl, )); },
query = window.location.search.substring(1);
urlParams = {};
while (match = search.exec(query))
urlParams[decode(match[1])] = decode(match[2]);
return urlParams;
}
var http = require('http'); // Fait appel à http.js
var url = require('url'); // Fait appel à url.js*/

const http = require('http');
const crawler = require(`${__dirname}/utils/htmlCrawler`);
const url = process.argv[2];

if (!url) {
	console.log('must include url');
} else {
	http.get(url, res => {
	// ↑ on pouvait aussi écrire http.get(url, function(res) => {
		console.log(`Got response status: ${res.statusCode}`);
		let content= '';
		res.on('data', chunk => {
			content += chunk;
		});
		res.on('end', ()=> {
			//console.log(content)
			crawler.saveTagTofile(content,'title')
		})
	}).on('error', e => {
		console.log("Got error: " +e.message);
	});
}