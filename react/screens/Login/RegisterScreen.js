import React, { Component } from 'react';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';
import axios from 'react-native-axios';
import { 
    Container, 
    Content,
    Form,
    Item, 
    Input, 
    Button,
    Text,
    Header,
    Left,
    Right,
    Body,
    Title,
    Icon,
    Toast,
} from 'native-base';

@observer
export default class RegisterForm extends Component {

    @observable username = '';
    @observable password = '';
    @observable secPassword = '';

    @computed get passwordWrong() {
        if(this.password !== this.secPassword && this.password !== '' && this.secPassword !== '') {
            return true;
        }
        return false;
    }

    @computed get passwordRight() {
        if(this.password === this.secPassword && this.password !== '' && this.secPassword !== '') {
            return true;
        }
        return false;
    }

    onRegister = () => {
        fetch('http://192.168.199.132:9999/api/test').then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });

        // if(this.password !== this.secPassword) {
        //     Toast.show({
        //         text: '两次密码输入不一致',
        //         buttonText: '确认',
        //         duration: 3000,
        //     })
        // }else {
            // axios({
            //     url: 'https://api.douban.com/v2/movie/in_theaters',
            //     method: 'get',
            // }).then(res => {
            //     console.log(res.status);
            // }).catch(err => {
            //     console.log(err);
            // })

            // axios({
            //     url: '192.168.199.132:9999/api/register',
            //     method: 'post',
            //     data: {
            //         username: this.username,
            //         password: this.password,
            //     },
            //     headers: {
            //         "Content-Type": "application/json",
            //     }
            // }).then(res => {
            //         console.log(res);
            // }).catch(err => {
            //     console.log('error:', err);
            // });

        //     fetch('192.168.199.132:9999/api/register', {
        //         method: 'post',
        //         body: JSON.stringify(data),
        //         headers: {
        //             "Accept": "application/json",
        //     　　　　 "Content-Type": "application/json",
        //             "Connection": "close",  
        // 　　　　 },
        //     }).then(res => {
        //         console.log(res);
        //         // if(res.code === 0) {
        //         //     Toast.show({
        //         //         text: '注册成功',
        //         //     });
        //         // }else {
        //         //     Toast.show({
        //         //         text: doc.des,
        //         //     })
        //         // } 
        //     }).catch(err => {
        //         console.log(err);
        //     });
        // }
    }

    returnIcon = () => {
        if(this.passwordRight) 
            return <Icon name='checkmark-circle' />
        if(this.passwordWrong)
            return <Icon name='close-circle' />
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => {
                            this.props.navigation.goBack();
                        }}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{
                            fontSize: 15,
                        }}>注册</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Form>
                        <Item last>
                            <Input 
                                placeholder="请输入帐号"
                                onChangeText={text => {
                                    this.username = text;
                                }}
                                value={this.username}
                            />
                        </Item>
                        <Item last error={this.passwordWrong} success={this.passwordRight}>
                            <Input 
                                placeholder="请输入密码" 
                                secureTextEntry
                                onChangeText={text => {
                                    this.password = text;
                                }}
                                value={this.password}
                            />
                            {
                                this.returnIcon()
                            }
                        </Item>
                        <Item last error={this.passwordWrong} success={this.passwordRight}>
                            <Input 
                                placeholder="再次输入密码" 
                                secureTextEntry
                                onChangeText={text => {
                                    this.secPassword = text;
                                }}
                                value={this.secPassword}
                            />
                            {
                                this.returnIcon()
                            }
                        </Item>
                        <Button 
                            onPress={this.onRegister}
                            block 
                            style={{
                                marginTop: 30,
                                marginLeft: 30,
                                marginRight: 30,
                            }}
                        >
                            <Text>注册</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}