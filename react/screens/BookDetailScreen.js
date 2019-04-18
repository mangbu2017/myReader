import React from 'react';
import { 
	StyleSheet,
    View, 
    Image,
    ScrollView,
    Alert,
} from 'react-native';

import { 
	Container,
	Header,
	Title,
	Body,
	Right,
	Button,
	Icon,
	Grid,
	Col,
	Text,
    List,
    Left,
    Row,
    Toast,
} from 'native-base';
import { observer } from 'mobx-react';
import Detail from '../store/detail';
import Book from '../store/index';
import { observable, computed } from 'mobx';

@observer
export default class LinksScreen extends React.Component {

    @observable introCollapse = true;

	constructor(props) {
		super(props);
    }

    // 跳转至阅读器
    linktoReader = () => {
        // 同步更新不需要action
        Book.readingBook = Detail.book;
        Book.readingChapter = 0;
        this.props.navigation.navigate('ReaderWithDrawer');
    }
    
    introToggle = () => {
        console.log('狗几把用没有');
        this.introCollapse = !this.introCollapse;
    }

    okDownload = () => {
        Toast.show({
            text: "已成功添加至缓存列表",
            buttonText: "确认",
            position: "top",
            duration: 2000,
        });
    }

    cancelDownload = () => {
        Toast.show({
            text: "取消成功",
            buttonText: "确认",
            position: "top",
            duration: 2000,
        });
    }

    @computed
    get _renderCollapse() {

        if(this.introCollapse) {
            return (
                <View>
                    <Text 
                        numberOfLines={3}
                        style={{
                            fontSize: 13,
                            paddingHorizontal: 10,
                        }}
                    >{Detail.book.intro}</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}>
                        <Button transparent onPress={ this.introToggle } style={{
                            height: 18,
                        }}>
                            <Text style={{
                                fontSize: 12,
                                color: '#999',
                            }}>展开更多</Text>
                        </Button>
                    </View>
                </View>
            )
        }
        return ( 
            <View>
                <Text
                    style={{
                        fontSize: 13,
                        paddingHorizontal: 10,
                    }}
                >{Detail.book.intro}</Text>
                <View style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}>
                        <Button transparent onPress={ this.introToggle } style={{
                            height: 18,
                        }}>
                            <Text style={{
                                fontSize: 12,
                                color: '#999',
                            }}>收起</Text>
                        </Button>
                    </View>
            </View>
        )
    }

    componentDidMount() {
        console.log('cover: ', Detail.book.cover);
    }

	render() {
		return (
			<Container style={styles.container}>
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
                            fontSize: 14,
                        }}>详情</Title>
                    </Body>
                </Header>
                <View style={{
                    // backgroundColor: 'red',
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 0,
                    zIndex: 100,
                }}>
                    <Button style={{
                        height: 60,
                        flex: 1,
                        // backgroundColor: 'red',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        borderRadius: 0,
                    }} success onPress={() => {
                        // Alert.alert(
                        //     '离线缓存',
                        //     '请确认将书籍加入书架并离线缓存',
                        //     [
                        //         {text: '取消', onPress: () => {
                        //             // console.log(this);
                        //             this.cancelDownload();
                        //         }, style: 'cancel'},
                        //         {text: '确认', onPress: () => {
                        //             this.okDownload();
                        //         }},
                        //     ],
                        //     // { cancelable: false }
                        // )
                    }}>
                        <Text style={{
                            textAlign: 'center',
                        }}>加入书架</Text>
                    </Button>
                    <Button style={{
                        height: 60,
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        borderRadius: 0,
                    }} info onPress={this.linktoReader}>
                        <Text>立即阅读</Text>
                    </Button>
                </View>
                <ScrollView style={{
                }} contentContainerStyle={{
                    marginBottom: 60,
                }}>
                    <View style={{
                        height: 180,
                        // backgroundColor: 'red',
                        paddingVertical: 13,
                        paddingHorizontal: 10,
                        flexDirection: 'row',
                    }}>
                        <Image style={{
                            width: 110,
                            height: 150,
                            marginRight: 10,
                        }} source={{
                            uri: Detail.book.cover,
                        }}></Image>
                        <View style={{
                            justifyContent: 'space-around',
                        }}>
                            <Text>{Detail.book.bookname}</Text>
                            <Text>作者: {Detail.book.author}</Text>
                            <Text>分类: {Detail.book.category}</Text>
                            <Text>更新状态: {Detail.book.writeState}</Text>
                        </View>
                    </View>
                    <Text style={{
                        fontSize: 14,
                        marginLeft: 10,
                    }}>最新章节: </Text>
                    <Text style={{
                        fontSize: 12,
                        color: '#999',
                        // backgroundColor: 'blue',
                        paddingHorizontal: 10,
                    }}>{Detail.book.lastChapter}</Text>
                    <Text style={{
                        fontSize: 14,
                        marginLeft: 10,
                    }}>简介: </Text>
                    {
                        this._renderCollapse
                    }
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                    <Text>加入书架</Text>
                </ScrollView>
            </Container>
        );
	}

	static navigationOptions = {
		header: null,
	};
}

const styles = StyleSheet.create({
	container: {
	},
});
