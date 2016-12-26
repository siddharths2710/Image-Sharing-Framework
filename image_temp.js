var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// img path
var imgPath = __dirname + '/images/';
var i=1,a;

var server = express();

// connect to mongo
mongoose.connect('localhost', 'testing_storeImg');

// example schema
var schema = new Schema({
   no:Number,
    img: {  data: Buffer, contentType: String }
});

// our model
var A = mongoose.model('A', schema);


mongoose.connection.on('open', function () {
  console.error('mongo is open');

  // empty the collection
  A.remove(function (err) {
    if (err) throw err;

    console.error('removed old docs');
	});	
for(i=1;i<=12;i++)
{

    // store an img in binary in mongo
     a = new A;
    a.img.data = fs.readFileSync(imgPath + i + '.jpg');
    a.no = i;
	a.img.contentType = 'image/jpg';
    a.save(function (err, a) {
      if (err) throw err;

      console.error('saved img to mongo');
});
}
      // start a demo server
      for(var j=1;j<=12;j++)
      {
      server.get('/' + '' + j, function (req, res, next) {
	console.log(req.originalUrl.substring(1))
	A.find({no:parseInt(req.originalUrl.substring(1))}, function (err, doc) {
	  if (err) return next(err);
	  console.log(doc[0])
	  console.log(doc[0].no)
	  res.contentType(doc[0].img.contentType);
	  res.send(doc[0].img.data);
	});

	/*A.findById(a, function (err, doc) {
          if (err) return next(err);
          res.contentType(doc.img.contentType);
          res.send(doc.img.data);
        });*/
      });

      
	}
    
  });



server.on('close', function () {
        console.error('dropping db');
        mongoose.connection.db.dropDatabase(function () {
          console.error('closing db connection');
          mongoose.connection.close();
        });
      });
      server.listen(3333);
