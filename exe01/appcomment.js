/*au dela de 100 lignes c'est too much autant faire des fichiers à chaque fonctinnalité!

"force norm" trop gros fichiers gros de bordel

/* 3 types de modules

		► au coeur de node.. http
		► 





/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*let obligatoir au lieu de var
  var en dernier recours
  ↓ $ prète à confusion présent car dans bcp de langages*/


let fs = require('fs');
let names = process.argv[2];  //node possède une array nomée process
let filePath = 'test1.txt'		//↑ argv 2 = le fichier 
fs.readFile(filePath, 'utf8', function(err, data) {	// fct° anonyme = call back
	if (err) throw err;

	let inData = data+names.replace(/,/g, "\n")+"\n";  // \n = saut a la ligne
	//↓asynchrone readFile writeFile
	fs.writeFile(filePath, inData, (err) => {	// fat arrow = fct°anonyme
	if (err) throw err;
	console.log('It\'s saved!');  //←check the intrus '\'

	});	
});

