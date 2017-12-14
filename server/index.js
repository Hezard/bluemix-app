var path = require('path'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

// app.enable('trust proxy');

// app.use(function (req, res, next) {
//     if (req.secure || process.env.BLUEMIX_REGION === undefined) {
//       next();
//     } else {
//       console.log('redirecting to https');
//       res.redirect('https://' + req.headers.host + req.url);
//     }
// });

app.use(express.static('./dist'));

app.get('/', function(request, response) {
    response.sendFile(path.resolve('./dist/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('listening on port: ', + port);
});