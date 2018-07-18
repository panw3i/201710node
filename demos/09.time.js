/**
 * Created by 百景 on 2018/7/18.
 */

setImmediate(()=>{
    console.log('setImmediate');    // 3 打印
})

process.nextTick(()=>{
    console.log('nextTick');  // 1 打印
})

setTimeout(()=>{
    console.log('setTimeout'); // 2 打印
})