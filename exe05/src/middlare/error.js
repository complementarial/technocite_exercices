function Erreur() {
	function middleware(req, res, next) {
		let err = new Error('Not Found');
		err.status=404;
		res.status(404);
		res.send(`Page ${req.url} give this error: ${err.message}`);

	}
	return middleware;
}
module.export = Erreur;