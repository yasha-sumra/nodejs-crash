import http from 'http';
const port = 8000;
const server = http.createServer((req, res) => {


    // res.setHeader('content-type', "text/plan"); // this line for setting the one response header with key : value
    // res.statusCode = 404; // this line is for sedding response with statuscode like 404, 500, 200 etc.


    // the below function re.writeHed() will do both the things it will set sattuscode  and also set the header's values (multiple value) . It will exapt two params 1. statuscode as first and 2. object of header's values as second.


    res.writeHead(200, {
        'content-type': 'text/html'
    });

    let element = "<h2> hello this is the res from http modules from node js  </h2>";
    res.end(element);
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});