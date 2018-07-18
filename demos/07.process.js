/**
 * Created by 百景 on 2018/7/18.
 */

const {argv,argv0,execArgv,execPath} = process;

console.log(argv)  // 参数列表
console.log(argv0)   // /Users/yons/.nvm/versions/node/v8.9.4/bin/node  启动命令
console.log(execArgv)  // 执行命令的前置参数
console.log(execPath)  // /Users/yons/.nvm/versions/node/v8.9.4/bin/node
