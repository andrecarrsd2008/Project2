var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(methodOverride('_method'));
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
var port = 8080;

app.use(express.static("public"));

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'fitness_db'
});

connection.connect(function(err){
    if(err)throw err;
    console.log('Connected as id: '+connection.threadId);
})

app.get('/',function(req,res){
  connection.query('SELECT * FROM runners;',function(err,data){
    res.render('index',{runners:data});
    })
  })

  app.post('/create', function(req,res){
    connection.query('INSERT INTO runners (runner) VALUES (?);', [req.body.methodOverride
  ], function(err,result){
    if(err)throw err;
    res.redirect('/'); 
    
  });
});

app.listen(port);
