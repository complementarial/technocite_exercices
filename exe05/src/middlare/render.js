function Render() {

	let PagesModel = require(`${process.cwd()}/src/models/pages`);
	let model = PagesModel();


	function middleware(req, res, next) {
		console.log('render');
		var page = model.searchPageByUrl(req.url);
		if (page) {
			res.send('the page was found !!');
		} else {
		next();
		}		
	};


	return middleware;
}	

module.exports = Render;

/*module export= Render;
(property) export=: () => (req: any, res: any, next: any) => void*/
