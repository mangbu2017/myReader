import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Reader from './Reader';
import ReaderSideBar from './ReaderSideBar';

// 需要配置两个对象的参数
export default createDrawerNavigator({
    Reader: {
        screen: Reader,
    },
}, {
    contentComponent:(props) => (
        <ReaderSideBar />
    ),
});
