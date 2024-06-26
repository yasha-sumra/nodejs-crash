import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path  from 'path';
// const port = 8000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT;
const server = http.createServer((req, res) => {

    // res.setHeader('content-type', "text/plan"); // this line for setting the one response header with key : value
    // res.statusCode = 404; // this line is for sedding response with statuscode like 404, 500, 200 etc.

    // the below function re.writeHed() will do both the things it will set sattuscode  and also set the header's values (multiple value) . It will exapt two params 1. statuscode as first and 2. object of header's values as second.



    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, {
                    'content-type': 'text/html'
                });

                res.write("HOME PAGE ");
                res.end();
            } else if (req.url === '/about') {
                res.writeHead(200, {
                    "content-type": "text/html",
                });

                res.write("ABOUT PAGE");
                res.end();
            }
            else {
                res.writeHead(404, {
                    'content-type': 'text/html'
                });

                res.write("page not found");

                res.end();
            }
        } else {
            throw new Error('METHOD NOT ALLOWED');
        }
    } catch (error) {
        res.writeHead(500, {
            'content-type': 'text/plain'
        });
        
        res.write("server error");
       
        res.end();
    }



});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});