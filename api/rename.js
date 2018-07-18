/**
 * Created by 百景 on 2018/7/18.
 */

const fs = require('fs');

fs.rename('./haha','haha.txt',error=>{
    console.log(error)
})

// 读取目录
fs.readdir('./',(err,files)=>{
    if (err) {
        throw err;

    }else{
        console.log(files)
    }
})