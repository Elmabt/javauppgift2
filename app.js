const { write } = require('fs');
var http = require('http');
var url = require('url');

function mainpage(res) {

}
function computepage(query, res) {
   // res.write("\nquery ="+query);
    res.write("\nquery.x =" + query.x);
    res.write("\nquery.y =" + query.y);
    res.write("\nquery.op =" + query.op);
}

http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    //res.write(req.url);
    var adr = req.url;
    var q = url.parse(adr, true);
    var patch = q.pathname;

    console.log("serving" + req.url);
    if (req.url == "/") {
        mainpage(res);
        res.write("main-kod stoppas här");
    }
    else if (req.url == "/compute") {
        computepage(q.search, res);
        //res.write("compute-kod stoppas in här!");
    }
    res.end();
}).listen(8888);