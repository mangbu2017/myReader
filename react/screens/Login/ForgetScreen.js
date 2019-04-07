import React, { Component } from 'react';
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
} from 'native-base';

export default class ForgetForm extends Component {

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
                        }}>修改密码</Title>
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
                            <Input placeholder="Username" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                        <Button block style={{
                            marginTop: 30,
                            marginLeft: 30,
                            marginRight: 30,
                        }}>
                            <Text>忘记密码</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}