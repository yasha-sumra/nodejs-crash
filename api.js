import http from 'http';
import path from 'path';
import fs from 'fs/promises';
import url from 'url';
const port = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const users = [
    {id:1, name: 'John doe'},
    {id:2 , name: 'Travesy Media'},
    {id:3 , name: 'net nija'}
];

console.log(__dirname);
const server = http.createServer( (req, res) =>{

    try {
        if (req.method === 'POST') {
            if (req.url === '/api/getuser') {
                res.setHeader("Content-type" , "application/json");
                res.write(JSON.stringify(users));
                res.end();
            } else if(req.url.match(/\/api\/user\/([0-9]+)/)){
                res.setHeader("Content-type","application/json");
                let id = req.url.split('/')[3];
                console.log(id);
                let user = users.find( (user) =>{
                    if (user.id === parseInt(id)){
                        return user;
                    }
                });
                if (user) {
                    res.write(JSON.stringify(user));
                    res.end();
                } else {
                    res.write(JSON.stringify({ message: "user not found"}));
                    res.end();
                }

               
            }
             else {
                res.setHeader("Content-type" , "application/json");
                res.statusCode =  404 ;
                res.write(JSON.stringify({
                    "error" : "page not found",
                }));
                res.end();
            }
        }
        else{
            res.writeHead(404, {"content-type" : "text/html"});
            res.write("Method Not Allowed");
            res.end();
        }
    } catch (error) {
        console.log(error);
        res.writeHead(500, {"content-type" : "text/html"});
        res.write("server error");
        res.end();
    }
});

server.listen(port, () =>{
    console.log("api server is running ");
});
