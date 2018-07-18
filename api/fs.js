/**
 * Created by 百景 on 2018/7/18.
 */

const fs = require('fs');
fs.readFile('./fs.js','utf8',(error,data)=>{   // 指定读取的编码格式
    if (error) {
      throw error
    }else{
        console.log(data)
    }

})

fs.writeFile('./text','this is a test',{
    encoding:'utf8'
},(error)=>{
    console.log(error)
})


// 以流的方式写入不用指定编码
const content = Buffer.from('我是内容的一部分');
fs.writeFile('./haha',content,error=>{
    console.log(error)
})



