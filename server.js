var http = require('http');
const express = require('express');
var fs = require('fs');
const app = express();
//2.

app.get('/', (req, res) => {
    ``
    res.send("<h1>hellow this is connecting<h1>");
});
//2.
// var server = http.createServer(function (req, resp) {
//     //3.
//     if (req.url === "/") {
//         fs.readFile("./index.html", function (error, pgResp) {
//             if (error) {
//                 resp.writeHead(404);
//                 resp.write('Contents you are looking are Not Found');
//             } else {
//                 resp.writeHead(200, { 'Content-Type': 'text/html' });
//                 resp.write(pgResp);
//             }
             
//             resp.end();
//         });
//     } else {
//         //4.
//         resp.writeHead(200, { 'Content-Type': 'text/html' });
//         resp.write('<h1>Product Manaager</h1><br /><br />To create product please enter: ' + req.url);
//         resp.end();
//     }
// });
//5.
app.listen(8000);
 
console.log('Server Started listening on 8000');
