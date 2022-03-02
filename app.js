const   express =   require('express'),
        path    =   require('path'),
        app     =   express(),
        PORT    =   process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'front/index.html'));
});

app.get('/shifumi', function(req, res) {
    res.sendFile(path.join(__dirname, 'front/Shi-Fu-Mi/index.html'));
});

app.get('/justeprix', function(req, res) {
    res.sendFile(path.join(__dirname, 'front/Juste prix/index.html'));
});

app.listen(PORT);
console.log('Server started at http://localhost:' + PORT);