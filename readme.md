##1. npm i native-base -S 后 react-native link 报错 [?]
我现在分析原因是 使用Expo根本不用link，应该就是这么回事

##2. app.json 中的路径可能有问题

##3. 样式作用在View/ScrollView上

##4. Touchable组件在使用时，不能使用position: absolute 进行定位

##5. ReactNavigation

##6. Network Error
1. 问题定位为 android设备需要https调用 => 不对

2. http://192.168.199.132:9999/api/test => 正确 http:// + ip + port

##7. 我的书架
1. 明朝那些事儿

##8. AsyncStorage报错
重启项目解决

##9. 报错一个看不懂的单词 可以vscode.search一下 非常可能是代码拼写错误

##10. 有些错误因为快捷引入多余的代码导致

##11. 项目在重新install时如果出现各种报错很可能是由于网络原因，只需要 rm node_modules重新install即可

##12. 在使用native-base这类组件库时，其官网的例子不能一字不动地照搬，需要理解并结合自己的样式才能正确使用

##13. react jsx 函数 返回得内容必须是一个父节点得dom

##14. mobx 真是太牛逼了 @computed 竟然可以作用于 jsx => { this.xxx } => 注意computed不是函数 不需要()

##15. 很多情况之下的 响应式渲染失效 是因为 没有设置@observer

