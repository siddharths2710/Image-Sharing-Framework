var http = require('http');
var fs = require('fs');
var url = require('url');
var express = require('express');

// Create a server
http.createServer( function (request, response) {
   var pathname = url.parse(request.url).pathname;

   console.log("Request for " + pathname + " received.");

   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
         response.end();
      } else {
        //Page found
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        if (pathname.includes(".html")) {
            response.writeHead(200, {'Content-Type': 'text/html'});
        } else if (pathname.includes(".css")) {
            response.writeHead(200, {'Content-Type': 'text/css'});
        }

        //var r = /\/image\/[0-9]*\.jpg/i;
        var r = /\/images\/[0-9]*\.jpg/i;
        console.log(r, pathname, r.test(pathname));
        if (r.test(pathname)) {
          var p = pathname.substring(1);
          var img = fs.readFileSync("." + pathname);
          console.log(pathname);
          response.writeHead(200, {'Content-Type': 'image/jpg' });
          response.end(img, 'binary');
        } else {
          response.end(data.toString());
        }
      }
   });
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
