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
      }else{	
        //Page found	  
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        response.writeHead(200, {'Content-Type': 'text/html'});	

        //var r = /\/image\/[0-9]*\.jpg/i;
        var r = /\/images\/[0-9]*\.jpg/i;
        console.log(r, pathname, r.test(pathname))
        if (r.test(pathname)) {
          var p = pathname.substring(1);
          var img = fs.readFileSync("."+pathname);
          console.log(pathname);
          response.writeHead(200, {'Content-Type': 'image/jpg' });
          response.end(img, 'binary');
        } else
        response.write(data.toString());		
        // Send the response body 
        response.end();
      }
   });   
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
