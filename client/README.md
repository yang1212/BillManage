# Getting Started with Create React App

### `Ant按需配置`
配置在package.json文件中，不支持单独配置babelRc文件  


### `图标使用`

v4.x 相比于 v3.x的引入方式有所改变(可参考项目中icon的引入)，此外对于ant样式的覆盖，使用::v-deep反而使得覆盖失效

### `Ant 主题定制`

create-react-app是基于scss，需改造webpack配置文件，并下载对应loader处理，可参考[此文](https://segmentfault.com/a/1190000023327242)


###  `好用的规则`

不编写 class 的情况，基于函数的形式编写组件，可参考[此文](https://zh-hans.reactjs.org/docs/hooks-intro.html)

attention: 基于函数形式时，此时this值即为undefined, 类似方法的调用，将不再基于this指向

