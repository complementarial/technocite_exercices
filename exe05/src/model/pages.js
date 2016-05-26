let fs = require ('fs');
let _ =require('lodash');
let datas =JSON.parse(fs.readFileSync(`${process.cdw()}/data/page.json`,'utf8'));

function PagesModel(){
	function searchPageBuUrl(urlStr){
		return _.find(datas.pages,{url:urlStr});
	}
	function getPageData(urlStr){
		return 'this data for the Page';
	}

	let that={};
	that.searchPageByUrl=searchPageByUrl;

	return that;
}

module.exports=PagesModel;