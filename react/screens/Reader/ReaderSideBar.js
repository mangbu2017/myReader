import React, { Component } from "react";
import { 
    View, 
    Image, 
    TouchableOpacity, 
    StyleSheet,
    FlatList,
} from "react-native";
// import { withNavigation } from "react-navigation";
// 取自native-base的cotainer组件 应该包涵基础的View组件
import {
    Header,
    Button,
    Text,
    Container,
    Content,
    Icon,
    Left,
    Body,
    Title,
    Right,
    Segment,
} from "native-base";
import UserInfo from '../../store/index';

class ReaderSideBar extends Component {
    constructor(props) {
        super(props);
    }

    _renderItem = ({item}) => {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 5,
            }}>
                <Text
                    style={{
                        flex: 1,
                        color: '#5F5E5B',
                    }}
                    numberOfLines={1}
                >{item.chaptername}</Text>
                {
                    item.content ? (<Text
                        style={{
                            color: '#A9A8A6',
                            fontSize: 13,
                        }}
                    >已缓存</Text>) : null
                }
            </View>
        )
    }

    updateChapters = () => {

    }

    render() {
        return (
            <Container style={styles.container}>
                <Header hasSegment style={{
                    backgroundColor: 'transparent',
                }}>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{
                            fontSize: 15,
                            color: '#4D4D4B',
                        }}>{UserInfo.readingBook.bookname}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="search" />
                        </Button>
                    </Right>
                </Header>
                <Segment style={{
                    backgroundColor: 'transparent',
                }}>
                    <Button first style={styles.activeSegment}>
                        <Text>目录</Text>
                    </Button>
                    <Button last style={styles.segment}>
                        <Text>书签</Text>
                    </Button>
                </Segment>
                <Content padder>
                    <FlatList
                        data={UserInfo.readingBook.chapters}
                        renderItem={this._renderItem}
                        keyExtractor={item => item._id}
                        onEndReached={this.updateChapters}
                        onEndReachedThreshold={0}
                    />
                </Content>
            </Container>
        );
    }
}

export default ReaderSideBar;

const styles = StyleSheet.create({
    container: {
        // width: 330,DAD7CF
        backgroundColor: '#DAD7CF',
    },
    activeSegment: {
        borderColor: '#9E938B',
        backgroundColor: '#7F6F65',
        color: '#BDB6AF',
    },
    segment: {
        borderColor: '#9E938B',
        backgroundColor: 'transparent',
        color: '#ADA499',
    }
})
