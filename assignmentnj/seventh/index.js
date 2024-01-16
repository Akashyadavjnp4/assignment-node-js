const http = require("http");

const port =3006;
const host = 'localhost';
const server = http.createServer((req,res) =>{
    res.setHeader('Content-Type', 'text/plain');
    res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
});

server.listen(port,()=>{
    console.log('serve run at ${port}');
});