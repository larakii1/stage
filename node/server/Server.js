var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});

var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function(message){
    console.log(message);
});

var monmodule = require('./monmodule');

monmodule.direBonjour();
monmodule.direByeBye();
var markdown = require('markdown').markdown;

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));
server.listen(8080); // Démarre le serveur

// server.close(); // Arrête le serveur. Déclenche l'évènement close