import React from 'react';
import { Animated, Text, View } from 'react-native';

class BottomView extends React.Component {
    state = {
        opacity: new Animated.Value(0),  // 透明度初始值设为0
        bottom: new Animated.Value(-100),
    }

    viewIn = () => {
        const { opacity, bottom } = this.state;

        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
            }),
            Animated.timing(bottom, {
                toValue: 0,
                duration: 500,
            }),
        ]).start();
    }

    viewOut = () => {
        const { opacity, bottom } = this.state;

        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
            }),
            Animated.timing(bottom, {
                toValue: -100,
                duration: 500,
            }),
        ]).start();
    }

    componentDidMount() {
        
        console.log(this.props.children);
    }

    render() {
        let { opacity, bottom } = this.state;

        return (
        <Animated.View                 // 使用专门的可动画化的View组件
            style={{
                ...this.props.style,
                opacity: opacity,         // 将透明度指定为动画变量值
                bottom,
            }}
        >
            {this.props.children}
        </Animated.View>
        );
    }
}

export default BottomView;