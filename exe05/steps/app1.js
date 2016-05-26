let express = require('express');
let app = express();
app.get('/', (req,res)=>{
	res.send('hello express');

});
module.exports = app;