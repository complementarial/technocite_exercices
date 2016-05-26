function Render() {
	function middleware(req, res, next) {
		console.log('render');
		next();
	};

	return middleware;
}	module export=
(property) export=: () => (req: any, res: any, next: any) => void
module.exports = Render;

