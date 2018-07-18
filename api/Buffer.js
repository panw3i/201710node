/**
 * Created by 百景 on 2018/7/18.
 */


//  Buffer对象全局,不需要引入
console.log(Buffer.alloc(5, 1))  // 第一个参数表示空间大小 ,第二个参数表示默认填充的值   单位为字节

console.log(Buffer.alloc(5, '我'))
console.log(Buffer.from([1,2,3]))  // 通过数组创建Buffer对象

console.log(Buffer.byteLength('我'));
console.log(Buffer.isBuffer('1'))  // 判断是否是Buffer对象

const buf1 = Buffer.from('a')   //
const buf2 = Buffer.from('b')

const buf = Buffer.concat([buf1,buf2])
console.log(buf)
console.log(buf.length)

const buf3= Buffer.from('杨总吃鸡鸡')
console.log(buf3.toString())
console.log(buf3.toString('base64'))