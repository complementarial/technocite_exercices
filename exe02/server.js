//protocol = langage (ip en est un)



const http = require('http');	

const hostname = '127.0.0.1'; //nom de l'hôte
const port = 3000;	//

const server = http.createServer((req, res) => {
  res.statusCode = 200;   //ex 404
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


/*avoir 2 servers un opérationnel et un cul sac*/
/* ↓ LOL ☻ */
/*const http = require('http');	

const hostname = '128.0.0.1'; //nom de l'hôte
const port = 3001;	//

const server = http.createServer((req, res) => {
  res.statusCode = 404;   //ex 404
  res.setHeader('Content-Type', 'text/plain');
  res.end('Go back!!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/


const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1'; //nom de l'hôte
const port = 3000;

const server = http.createServer((req, res) => {

	let url = req.url;
	if (url !== '/' && url !== '/favicon') {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/plain');
		res.end('this is a 404 error please smile :)');
	} else {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hellow World! ♥\n')
	}
});


server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});