//créer un acces vers 2 pages... (=2 htmls différents)



const http = require('http');
const fs = require('fs');

const routeMgt = require('./modules/routesMgt')
const hostname = '127.0.0.1'; //nom de l'hôte
const port = 3000;

const server = http.createServer((req, res) => {

	let url = req.url;
	console.log(url)
		if (url.indexOf('.jpg'|| '.gif' || '.png') !== -1) {
				res.statusCode = 200;
				let readStream = fs.createReadStream(`public${url}`);
				readStream.on('open', function() {
					readStream.pipe(res);
				});
				readStream.on('error', function(err) {
					res.end(err);
				});

		} else {
			if (url !== '/' && url !== '/favicon') {
				res.statusCode = 404;
				res.setHeader('Content-Type', 'text/plain');
				res.end('This is a 404 error please smile :)');
			} else {
				routeMgt(req,res);
				}
			}
		
	});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});