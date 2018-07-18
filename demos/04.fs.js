/**
 * Created by 百景 on 2018/7/18.
 */

const fs = require('fs')

const result = fs.readFile('./04.fs2.js',(err,data)=>{
    if (err) {
        console.log(err)
    }else{
        console.log(data.toString())
    }
});

console.log(result)  // undefined