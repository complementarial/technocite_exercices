let fs = require ('fs');

let datas =JSON.parse(fs.readFileSync(`${process.cdw()}/data/page.json`,'utf8'));

function PagesModel(){
	function serachPageBuUrl(urlStr){
		return 'this page exist';
	}
	function getPageData(urlStr){
		return 'this data for the Page';
	}

	let that={};
	that.searchPageByUrl=searchPageByUrl;
	that.getPageData;
	return that;
}

module.exports=PagesModel;