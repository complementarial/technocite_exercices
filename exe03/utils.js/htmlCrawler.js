const fs = require('fs');
const cheerio = require('cheerio');
module.exports.saveTagTofile = function(data, tagToSave){
	let $ = cheerio.load(data);
	let value = `${$(tagToSave).text()}\n`;
	fs.appendFile('log.txt', value, (err) => {
		if (err) throw err;
		console.log('The "data to append" was appened to file');
		});
	};
	
	//console.log($(tagToSave).text())
