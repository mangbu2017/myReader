import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import SideBar from '../screens/SideBar/SideBar';
import MainTabNavigator from './MainTabNavigator';

// const SideStack = createStackNavigator({
//     Main: SideBar,
// });

// SideStack.navigationOptions = {
//     drawerLabel: '个人中心',
// };

// 需要配置两个对象的参数
export default createDrawerNavigator({
    MainWithDrawer: {
        screen: MainTabNavigator,
        navigationOptions: () => ({
            // ios回退标题
            headerBackTitle: '返回',
            // 定义是否允许 侧滑返回，ios默认true，android相反
            // ps: 测试无效
            gesturesEnabled: true, 
        })
    },
}, {
    contentComponent:(props) => (
        <SideBar />
    ),
});

// 现在分析 switch 应该是可以包含其他的creator
// 并且通过上面的代码我们也可看出 这些creator是层层包含的关系
// 还有stack也比较好理解
