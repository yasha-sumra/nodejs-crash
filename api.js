import http from 'http';
import path from 'path';
import fs from 'fs/promises';
import url from 'url';
const port = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const logger = (req, res, next) => {
    console.log(`${req.method}    ${req.url}`);
    next();
}

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}
//  Route handler for POST /api/getuser
const postUsersHandler = (req, res) => {
    res.statusCode = 200;
    res.write(JSON.stringify(users));
    res.end();
}
//  Route handler for POST / apit/user/id
const PostUserByIdHandler = (req, res) => {
    let id = req.url.split('/')[3];
    console.log(id);
    let user = users.find((user) => {
        if (user.id === parseInt(id)) {
            return user;
        }
    });
    res.statusCode = 200;
    if (user) {
        res.write(JSON.stringify(user));
        res.end();
    } else {
        res.write(JSON.stringify({ message: "user not found" }));
        res.end();
    }
}
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({
        "error": "page not found",
    }));
    res.end();
}

const methodNotAllowed = (req, res) => {
    runInNewContext.statusCode = 500;
    res.write("Method Not Allowed");
    res.end();
}
const users = [
    { id: 1, name: 'John doe' },
    { id: 2, name: 'Travesy Media' },
    { id: 3, name: 'net nija' }
];

const server = http.createServer((req, res) => {
    logger(req, res, () => {

        jsonMiddleware(req, res, () => {
            try {

                if (req.method === 'POST') {
                    if (req.url === '/api/getuser') {
                        postUsersHandler(req, res);
                    } else if (req.url.match(/\/api\/user\/([0-9]+)/)) {
                        PostUserByIdHandler(req, res);
                    } else {
                        notFoundHandler(req, res)
                    }
                } else {
                    methodNotAllowed(req, res);
                }
            } catch (error) {
                console.log(error);
                res.writeHead(500, { "content-type": "text/html" });
                res.write("server error");
                res.end();
            }
        })
    });


});

server.listen(port, () => {
    console.log("api server is running ");
});
