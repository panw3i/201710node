/**
 * Created by 百景 on 2018/7/18.
 */

const fs = require('fs');
const promisify = require('util').promisify;

// promisify 将函数进行promise化 返回一个新的函数 该函数返回promise对象
const read = promisify(fs.readFile);

// error内容通过 try catch 进行捕获
async function test() {
    try{
        const content = await read('./promisefy.js')
        console.log(content.toString())
    }catch (e) {
        console.log(e)
    }

}

test();