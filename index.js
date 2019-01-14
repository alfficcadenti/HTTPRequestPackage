// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         console.log("Error!!!");
       })
       .on('response', function (response) {
         console.log("Response Message", response.statusMessage, response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));
