/**
 * Created by 百景 on 2018/7/18.
 */
const Emitter = require('events');

class MyEmitter extends Emitter{}  //创建一个类继承自 Emitter

const myEmitter = new MyEmitter()  // 创建子类的实例

myEmitter.on('someEvent',()=>{    // 订阅事件
    console.log('触发了某个事件');
})

myEmitter.emit('someEvent')  // 触发事件