import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/Login/LoginScreen';
import ForgetScreen from '../screens/Login/ForgetScreen';
import RegisterScreen from '../screens/Login/RegisterScreen';
import ReaderWithDrawer from '../screens/Reader/index';
import { Button, Text} from 'native-base';

import MainWithDrawer from './MainWithDrawerNavigator';

export default createStackNavigator({
    // 如果这样使用就只能直接写上了
    MainWithDrawer,
    Login: {
        // 必选，用于指定一个react组件，来作为屏幕显示的内容，组件加载时会设置props.navigation
        screen: LoginScreen,
        // 屏幕导航选项
        navigationOptions: (props) => ({
            // 导航栏标题
            headerTitle: '登录',
            // ios回退标题
            headerBackTitle: '返回',
            // 定义是否允许 侧滑返回，ios默认true，android相反
            // ps: 测试无效
            gesturesEnabled: true,
            headerLeft: (
                <Button onPress={() => {
                    console.log(props.navigation.goBack);
                    console.log('******');
                    // console.log(props.navigation.navigate);
                    // props.navigation.navigate('MainWithDrawer');
                    props.navigation.goBack();
                }}>
                    <Text>返回</Text>
                </Button>
            ),
        }),
    },
    Forget: {
        screen: ForgetScreen,
    }, 
    Register: {
        screen: RegisterScreen,
    },
    ReaderWithDrawer: {
        screen: ReaderWithDrawer,
    },
}, {
    // 默认的页面组件，必须是上面已经配置的 页面
    initialRouteName: 'MainWithDrawer',
    // 3.X的，2.X是navigationOptions
    // 默认屏幕导航选项
    defaultNavigationOptions: {
        header: null,
    },
    // modal设置为上下切换
    mode: 'modal',
    // 导航栏的 显示模式，默认是 float，无透明效果
    headerMode: 'float',
});

// createStackNavigator(RouteConfigs, StackNavigatorConfig);
// RouteConfigs => 路由配置对象，映射表