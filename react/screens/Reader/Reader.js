import React, { Component } from 'react';
import { 
    StyleSheet, 
    FlatList, 
    ScrollView,
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';
import { 
    Container, 
    Fab,
    Icon,
    Button,
} from 'native-base';
import UserInfo from '../../store/index';
import {Dimensions} from 'react-native';
import BottomView from './animation/BottomView';
import TopView from './animation/TopView';
const { 
    height: windowHeight,
    width: windoWidth, 
} =  Dimensions.get('window');

// 响应式组件
@observer
export default class Reader extends Component {
    @observable menu = false;
    @observable refreshing = false;
    @observable active = true;

    @computed
    get itemChapterData() {
        return UserInfo.readingBook.chapters.filter(item => {
            return item.content;
        });
    }

    // 好像应该是在didmount里
    async componentDidMount() {

        // readingBook 没有章节列表
        if(!UserInfo.readingBook.chapters || UserInfo.readingBook.chapters.length === 0) {
            const id = UserInfo.readingBook._id;
            // 在本地缓存中吗
            if(UserInfo.cacheBook[id]) {
                // 设置为本地缓存中的章节列表
                UserInfo.readingBook.chapters = UserInfo.cacheBook[id];
            }else {
                // 获取章节列表并设置到缓存中
                await UserInfo.fetchBookChapter();
            }
        }

        // 获取第一章内容
        await UserInfo.fetchChapter(0);

        console.log(UserInfo.readingBook);
    }

    async componentWillUnmount() {
        UserInfo.saveData();
    }

    loadChapter = () => {
        // 列表太大 最好不要重新render
        // this.refreshing = true;
        console.log('loading chapter ...');
        UserInfo.fetchChapter(1);
    }

    showMenu = (e) => {
        console.log('touchstart');
    }

    pressScroll = () => {
        console.log('release');
    }   

    _renderItem = ({item}) => {
        console.log(item);
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    if(this.menu) {
                        this.refs.bottom.viewOut();
                        this.refs.top.viewOut();
                    }else {
                        this.refs.bottom.viewIn();
                        this.refs.top.viewIn();
                    }
                    this.menu = !this.menu;
                }}
                // onShowUnderlay={separators.highlight}
                // onHideUnderlay={separators.unhighlight}
            >
                <View style={{
                    // backgroundColor: 'white'
                }}>
                    <Text style={styles.contentText}>{item.content}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    _renderBottom() {
        return (
            <BottomView style={styles.bottom} ref="bottom">
                <View style={{
                    opacity: 1,
                }}>
                    <Image 
                        style={{
                            width: 40,
                            height: 40,
                        }}
                        source={require('../../assets/images/mulu.png')} 
                    />
                    <Text style={{
                        color: '#fff',
                    }}>目录</Text>
                </View>
            </BottomView>
        )
    }

    _renderTop() {
        return (
            <TopView style={styles.top} ref="top">
                <Text>Top</Text>
            </TopView>
        )
    }

    _renderFab() {
        return (
            <View></View>
        )
    }

    render() {
        return (
            <Container style={styles.container} onPress={this.showMenu}>
            {
                this._renderTop()
            }
            {
                this._renderBottom()
            }
            {
                this._renderFab()
            }   
            <FlatList
                data={this.itemChapterData}
                renderItem={this._renderItem}
                keyExtractor={item => item._id}
                // refreshing 正在加载数据
                onEndReached={this.loadChapter}
                onEndReachedThreshold={0.5}
                // refreshing={this.refreshing}
            />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E1CFA7',
        paddingHorizontal: 13,
    },
    content: {
    },
    contentText: {
        fontSize: 15,
        lineHeight: 25,
    },
    top: {
        width: windoWidth,
        height: 50,
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    bottom: {
        width: windoWidth,
        height: 100,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 100,
    }
})