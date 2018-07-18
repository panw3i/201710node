/**
 * Created by 百景 on 2018/7/18.
 */

const {normalize,join,resolve,basename,dirname,extname,parse,format,sep,posix,win32,delimiter} = require('path')
const path = require('path')

console.log(normalize('/bin//////bash'))  // 处理路径为系统标准路径
console.log(join('user', '/bin', 'desktop'))
console.log(resolve('./'))  // /Users/yons/Desktop/201710node/api  相对路径处理成绝对路径

const filePath = '/usr/local/bin/no.txt';
console.log(basename(filePath))
console.log(dirname(filePath))
console.log(extname(filePath))

console.log(parse(filePath))

/*
*
* { root: '/',
  dir: '/usr/local/bin',
  base: 'no.txt',
  ext: '.txt',
  name: 'no' }
*
* */


console.log(format({
    root: '/',
    dir: '/usr/local/bin',
    base: 'no.txt',
    ext: '.txt',
    name: 'no'
}))

console.log(sep)
console.log(win32.sep)  // 指定系统操作符
console.log(delimiter)

console.log(process.env.PATH)  // 环境路径

console.log(__dirname);    // 总是返回文件的绝对路径
console.log(process.cwd());  // 返回的是node命令执行时所在的文件夹