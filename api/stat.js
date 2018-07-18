/**
 * Created by 百景 on 2018/7/18.
 */

const fs = require('fs');

// 如查 stat不存在则表示文件不存在
fs.stat('./haha',(err,stats)=>{
    console.log(stats);
})