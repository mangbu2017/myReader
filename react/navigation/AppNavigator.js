import React from 'react';
// react-navigation本身的 组件
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainWithDrawerNavigator from './MainWithDrawerNavigator';
import OtherNavigator from './OtherNavigator';

// export default createAppContainer(createSwitchNavigator({
//     // You could add another route here for authentication.
//     // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//     Main: MainWithDrawerNavigator,
//     Other: OtherNavigator,
// }));

export default createAppContainer(OtherNavigator);

// App Containers(有点像是浏览器中的history)
// 容器负责管理应用程序状态，并将顶级导航器链接到应用程序环境。
// 在Android上，应用程序容器使用链接API来处理后退按钮。
// 还可以将容器配置为持久保存导航状态。在web上，您将使用不同于React Native的容器。


// 我们之前的那个想法是不对的 