import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
// 取自native-base的cotainer组件 应该包涵基础的View组件
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
import UserInfo from '../../store/index';

const routes = ["Home", "Chat", "Profile"];

class SideBar extends Component {
    constructor(props) {
        super(props);

        // 不bind访问不到this.props
        this.onUserLogin = this.onUserLogin.bind(this);
    }
    
    onUserLogin() {
        console.log('login');
        this.props.navigation.navigate('Login');      
    }

    render() {
        return (
            <Container>
                <Content>
                    {/** style行间写法*/}
                    <Image
                        source={{
                            uri:"https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
                        }}
                        style={{
                            height: 120,
                            width: "100%",
                            alignSelf: "stretch",
                            position: "absolute"
                        }}
                    />
                    <TouchableOpacity
                        onPress={this.onUserLogin}
                        style={{
                            marginTop: 20,
                        }}
                    >
                        <View>
                            <Image
                                style={{
                                    height: 70,
                                    width: 70,
                                    alignSelf: "center",
                                }}
                                square
                                source={require('../../assets/images/user.png')}
                            />
                            <Text style={{
                                textAlign: "center",
                                fontSize: 12,
                                color: '#fff',
                            }}>{UserInfo.username}</Text>
                        </View>
                    </TouchableOpacity>
                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}
                                >
                                <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}

export default withNavigation(SideBar);
