const   express =   require('express'),
        path    =   require('path'),
        app     =   express(),
        PORT    =   process.env.PORT || 8080;

app.use(express.static('public'));

// Route pour la page d'accueil
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'front/index.html'));
});
// Route pour le jeu du shi-fu-mi
app.get('/shifumi', function(req, res) {
    res.sendFile(path.join(__dirname, 'front/Shi-Fu-Mi/index.html'));
});
// Route pour le jeu du juste prix
app.get('/justeprix', function(req, res) {
    res.sendFile(path.join(__dirname, 'front/Juste prix/index.html'));
});
// Route pour le pire sîte
app.get('/worst', function(req, res) {
  res.sendFile(path.join(__dirname, 'front/WorstSite/index.html'));
});
// Route pour le crepe party generator
app.get('/crepes', function(req, res) {
  res.sendFile(path.join(__dirname, 'front/crepes/index.html'));
});
// Route pour la carte OpenLayers
app.get('/maps', function(req, res) {
  res.sendFile(path.join(__dirname, 'front/Maps/index.html'));
});
// Route pour le CV de l'exercice du cours
app.get('/example', function(req, res) {
  res.sendFile(path.join(__dirname, 'front/example/index.html'));
});

app.listen(PORT);
console.log('Le serveur tourne sur le port : ' + PORT);