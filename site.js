var express = require('express');
var app = express();

app.listen(80);
console.log('ecoute sur le port 80');


app.get("/", function(req, res){   // on le teste en mettant localhost dans l'URL
  res.end("Hello World!");    //l’URL « / », correspond à la racine
});


app.get('/hello.html', function(req, res){
  res.end(
    "<!DOCTYPE html>"
    +"<html>"
    +"<body><h1>Hello World!</h1></body>"
    +"</html>"
  );
});
