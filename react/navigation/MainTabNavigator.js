import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

// createStackNavigator是一个返回React组件的函数。
// 它接受一个route配置对象和一个可选的options对象(目前我们省略了下面的内容)。
// 因为createStackNavigator函数返回一个React组件，
// 所以我们可以直接从App.js中将其导出为应用程序的根组件。
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: "书架",
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle'
            }
        />
    ),
    // ios回退标题
    headerBackTitle: '返回',
    // 定义是否允许 侧滑返回，ios默认true，android相反
    // ps: 测试无效
    gesturesEnabled: true, 
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: "书库",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
  // ios回退标题
  headerBackTitle: '返回',
  // 定义是否允许 侧滑返回，ios默认true，android相反
  // ps: 测试无效
  gesturesEnabled: true, 
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: '排行',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
  // ios回退标题
  headerBackTitle: '返回',
  // 定义是否允许 侧滑返回，ios默认true，android相反
  // ps: 测试无效
  gesturesEnabled: true, 
};

// 该函数创建一个包含三个导航的TabBar
export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

// 现在分析 switch 应该是可以包含其他的creator
// 并且通过上面的代码我们也可看出 这些creator是层层包含的关系
// 还有stack也比较好理解
