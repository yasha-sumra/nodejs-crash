import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
// const port = 8000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const port = process.env.PORT_FOR_SERVER2;
const server = http.createServer(async (req, res) => {

    // res.setHeader('content-type', "text/plan"); // this line for setting the one response header with key : value
    // res.statusCode = 404; // this line is for sedding response with statuscode like 404, 500, 200 etc.

    // the below function re.writeHed() will do both the things it will set sattuscode  and also set the header's values (multiple value) . It will exapt two params 1. statuscode as first and 2. object of header's values as second.



    try {
        if (req.method === 'GET') {
            let FilePath;
            if (req.url === '/') {
                FilePath = path.join(__dirname, 'public', 'index.html');

            } else if (req.url === '/about') {
                FilePath = path.join(__dirname, 'public', 'about.html');
            }
            else {
                res.setHeader('content-type', 'text/plain');
                res.write("page not found");
                res.end();
            }

            const file_content = await fs.readFile(FilePath);
            console.log(FilePath);
            res.setHeader("content-type", 'text/html');
            res.write(file_content);
            res.end();
        } else {
            throw new Error('METHOD NOT ALLOWED');
        }
    } catch (error) {
        if (!res.headersSent) {
            res.writeHead(500, {
                'content-type': 'text/plain'
            });
            res.write("server error");
            res.end();
        }
    }



});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});