/**
 * Created by 百景 on 2018/7/18.
 */

const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write('<h1>')
    res.write('hello nodeJS')
    res.write('</h1>')
    res.end()
})

server.listen('3000')