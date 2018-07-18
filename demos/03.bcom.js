/**
 * Created by 百景 on 2018/7/18.
 */
console.log('模块加载时,这句也会被加载,并且只会加载一时,后面调用时会使用缓存,如果不想被执行,应该放到函数里');

module.exports = {
    foo(){
        console.log('B');
    },
    bar:'123'
};

module.exports.b = 'b'