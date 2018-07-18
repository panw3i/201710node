## node调试程序
```
node --inspect-brk 01_run.js
```

浏览器打开
```
chrome://inspect/#devices
```

## node的模块化

1. 每一个文件是一个模块 , 有自己的作用域
2. 在模块内部 module 变量代表模块本身
3. module.exports属性代表模块对外的接口
4. require 不写路径则认为是内建模块或者是各级的node_modules内的第三方模块(当前没有,会向上一级进行查找node_modules文件夹)
5. 模块加载时,模块内的语句也会被加载,并且只会加载一次,后面调用时会使用缓存,如果不想被执行,应该放到函数里

## es6 82原则 let const ... => class

## vue数据驱动(主要操作的是数据)
- 操作dom

## JS数据类型
- 基本 number string boolean null undefined
- Object func...
- Symbol(es6)

## {} []
### 数组的变异(括号中的能改变原数组)
- 操作数组的方法 (pop push unshift shift  splice reverse sort) indexOf lastIndexof concat slice

## forEach filter(过滤) map(映射)  some every  reduce  (includes find es6)

## node版本>8.5 webstorm(vscode,sublime) > 2017以上版本


## 框架和库
- 框架 vue 拥有完整的解决方案 我们写好人家调用我
- 库 jquery underscore zepto animate.css
我们调用他

## 渐进式 （渐进增强）
- vue全家桶 vuejs + vue-router + vuex + axios
- 通过组合 完成一个完整的框架

## MVC（backbone） 单向
- model数据
- view 视图
- controller 控制器

## MVVM(angular,vue) 双向的
- model数据
- view 视图
- viewModel 视图模型

## Object.defineProperty(es5)的没有替代方案
- 不支持ie8<=

## 安装vue
- cdn的方式
- npm安装 node package manager
```
npm init -y
npm install vue
```
> 初始化会产生一个pacakge.json的文件这个文件用来描述项目的依赖，不能有大写 特殊字符 中文，而且不要和安装的包的名字相同

## mvvm
https://github.com/DMQ/mvvm


