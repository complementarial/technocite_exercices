const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const root=process.cwd();
app.engine('hbs',exphbs({defaultLayout :'main',extname:'.hbs'}));
app.set('view engine','hbs');
app.use(express.static('public'));
app.get('/', (req, res)=> {
  res.render('home');
});
app.get('/page',(req,res) =>{
 res.render('page1',{layout:'pages'})
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});