var express = require('express'); //importamos la dependencia
var app = express(); //declaramos una app de express

var port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor

//primera ruta ( esta al nivel de la raiz/), hello world
app.get("/", function (req, res){
    res.send("<html><head></head><body><h1>hello world</h1></body></html>");
});

app.listen(port); //levatar el server y ponero en escucha

//segunda ruta /api regresa un objeto JSON
app.get("/api", function (req, res){
    res.json({firstname: "Jhon", lastname: "Doe"})
});

//tercera ruta, recibe un parametro
app.get("/person/:id", function (req, res){
    res.send("<html><head></head><body><h1>Person: " + req.params.id + " </h1></body></html>");
});