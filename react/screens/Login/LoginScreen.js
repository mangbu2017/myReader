import React, { Component } from 'react';
import { 
    TouchableOpacity,
    View,
} from 'react-native';
import { 
    Container, 
    Content,
    Form,
    Item, 
    Button,
    Text,
    Header,
    Left,
    Right,
    Body,
    Title,
    Icon,
    Input,
} from 'native-base';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
            {
                // <Header style={{
                //     alignItems: 'center',
                //     justifyContent: 'flex-start',
                // }}>
                //     <TouchableOpacity onPress={() => {
                //         console.log(this.props);
                //         // console.log(this.props.navigator)
                //         this.props.navigation.goBack()
                //     }}>
                //         <Text style={{
                //             color: '#fff',
                //         }}>返回</Text>
                //     </TouchableOpacity>
                // </Header>
            }
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
                        }}>登录</Title>
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
                            <Input placeholder="用户名" />
                        </Item>
                        <Item last>
                            <Input 
                                secureTextEntry={true}
                                placeholder="密码"
                            />
                        </Item>
                        <Content contentContainerStyle={{
                            flexDirection: 'row',
                            height: 50,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            // backgroundColor: 'red',
                        }}>
                            <TouchableOpacity onPress={() => {
                                console.log('忘记密码');
                                this.props.navigation.navigate('Forget');
                            }}>
                                <Text style={{
                                    fontSize: 12,
                                    marginLeft: 15,
                                }}>忘记密码</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                console.log('注册帐号');
                                this.props.navigation.navigate('Register');
                            }}>
                                <Text style={{
                                    fontSize: 12,
                                    marginRight: 15,  
                                }}>注册帐号</Text>
                            </TouchableOpacity>
                        </Content>
                        <Button block style={{
                            marginLeft: 30,
                            marginRight: 30,
                        }}>
                            <Text>登录</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}