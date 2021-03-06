var path = require('path'),
    express = require('express'),
    app = express(),
    port = 3000; // process.env.PORT || 3000

// app.enable('trust proxy');

// app.use(function (req, res, next) {
//     if (req.secure || process.env.BLUEMIX_REGION === undefined) {
//       next();
//     } else {
//       console.log('redirecting to https');
//       res.redirect('https://' + req.headers.host + req.url);
//     }
// });

app.use(express.static(path.resolve('../client/dist')));

app.get('/', function(request, response) {
    response.sendFile(path.resolve('../client/dist/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('listening on port: ', + port);
});