/**
 * Created by 百景 on 2018/7/18.
 */

const EventEmitter = require('events');

class CustomEvent extends EventEmitter{}

const ce = new CustomEvent();

ce.on('error',(error,date)=>{
    console.log(error)
    console.log(date)
})

ce.emit('error',new Error('oops'),Date.now());  // 事件传参

