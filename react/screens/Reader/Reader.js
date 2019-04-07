import React, { Component } from 'react';
import { 
    StyleSheet, 
    FlatList, 
    ScrollView,
    Text,
    View,
    TouchableWithoutFeedback,
} from 'react-native';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';
import { 
    Container, 
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

    @computed
    get itemChapterData() {
        return UserInfo.readingBook.chapters.filter(item => {
            return item.content;
        });
    }

    async componentWillMount() {
        await UserInfo.fetchChapter(0);
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
                <Text>Bottom</Text>
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

    render() {
        return (
            <Container style={styles.container} onPress={this.showMenu}>
            {
                this._renderTop()
            }
            {
                this._renderBottom()
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
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    bottom: {
        width: windoWidth,
        height: 100,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    }
})