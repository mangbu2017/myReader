import React from 'react';
import { Animated, Text, View } from 'react-native';

class TopView extends React.Component {
    state = {
        opacity: new Animated.Value(0),  // 透明度初始值设为0
        top: new Animated.Value(-50),
    }

    viewIn = () => {
        const { opacity, top } = this.state;

        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
            }),
            Animated.timing(top, {
                toValue: 0,
                duration: 500,
            }),
        ]).start();
    }

    viewOut = () => {
        const { opacity, top } = this.state;

        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
            }),
            Animated.timing(top, {
                toValue: -50,
                duration: 500,
            }),
        ]).start();
    }

    componentDidMount() {
        
        console.log(this.props.children);
    }

    render() {
        let { opacity, top } = this.state;

        return (
        <Animated.View                 // 使用专门的可动画化的View组件
            style={{
                ...this.props.style,
                opacity: opacity,         // 将透明度指定为动画变量值
                top,
            }}
        >
            {this.props.children}
        </Animated.View>
        );
    }
}

export default TopView;