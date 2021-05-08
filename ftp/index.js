// list ftp directory

// var Client = require('ftp');
 
// var c = new Client();
// c.on('ready', function() {
//   c.list(function(err, list) {
//     if (err) throw err;
//     console.dir(list);
//     c.end();
//   });
// });
// // connect to localhost:21 as anonymous
// c.connect({
//       host: '125.19.69.148',
//       port: '21',
//       user: 'cmstest',
//       password: 'che8Iu2Eil1bei'
//     });

// upload a file to ftp

// var Client = require('ftp');
// var fs = require('fs');

// var c = new Client();
// c.on('ready', function() {
//   c.put('foo.txt', 'NM1/ZEETV/PRO/foo.remote-copy.txt', function(err) {
//     if (err) throw err;
//     c.end();
//   });
// });
// // connect to localhost:21 as anonymous
// c.connect({
//           host: '125.19.69.148',
//           port: '21',
//           user: 'cmstest',
//           password: 'che8Iu2Eil1bei'
//         });

// delete a file from ftp

// var Client = require('ftp');
// var fs = require('fs');

// var c = new Client();
// c.on('ready', function() {
//   c.delete('foo.remote-copy.txt', function(err) {
//     if (err) throw err;
//     c.end();
//   });
// });
// // connect to localhost:21 as anonymous
// c.connect({
//           host: '125.19.69.148',
//           port: '21',
//           user: 'cmstest',
//           password: 'che8Iu2Eil1bei'
//         });

// create directory on ftp

var Client = require('ftp');
var fs = require('fs');

var c = new Client();
c.on('ready', function() {
  c.mkdir('NM1/ZEETV/PRO',1, function(err) {
    if (err) throw err;
    c.end();
  });
});
// connect to localhost:21 as anonymous
c.connect({
          host: '125.19.69.148',
          port: '21',
          user: 'cmstest',
          password: 'che8Iu2Eil1bei'
        });