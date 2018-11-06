var express = require ('express');
var fs = require ('fs');
var jade = require('pug');
var path = require ('path');
var PORT = process.env.PORT || 4000;

var app = express();
app.use('/public', express.static(__dirname + '/public'));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.get('/', function(req, res) {
    return res.redirect('public/music.html');
});

app.get('/music', function (req, res) {
    var fileId = req.query.id;
    var file =__dirname + '/music/'+ fileId;
    fs.exists(file, function(exists){
        if (exists) {
            var rstream = fs.createReadStream(file);
            rstream.pipe(res);
        }
        else {
            res.send('Error 404');
            res.end();
        }
    });
});

app.get('/download', function(req, res) {
    var fileId = req.query.id;
    var file = __dirname + '/music/' + fileId;
    fs.exists(file,function (exists) {
        if (exists) {
            res.setHeader('Content-disposition', 'attachment; filename=' + fileId);
			res.setHeader('Content-Type', 'application/audio/mpeg3')
			var rstream = fs.createReadStream(file);
			rstream.pipe(res);
		}
		else
		{
			res.send("  Error 404");
			res.end();
		}
	});
});
app.listen(PORT, function () {
    console.log('App listening on port'+' '+ PORT)
})