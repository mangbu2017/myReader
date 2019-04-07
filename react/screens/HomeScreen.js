import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { 
    Container, 
    Header, 
    Content, 
    Card, 
    CardItem, 
    Thumbnail, 
    Text, 
    Button, 
    Icon, 
    Left, 
    Body, 
    Right,
    Item,
    Input, 
} from 'native-base';

import { WebBrowser } from 'expo';
import UserInfo from '../store/index';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    // 写法不需要bind(this)
    navToReader = (item) => {
        UserInfo.checkReadingBook(item);
        this.props.navigation.navigate('Reader');
    }
    
    render() {
        return (
            <Container style={styles.container}>
                {/** 滚动视图 */}
                <Header searchBar>
                    <Item style={{
                        width: 50,
                    }}>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    {
                        UserInfo.bookshelf.map((item, index) => {
                            return  (
                                <TouchableOpacity onPress={() => {
                                    this.navToReader(item);
                                }} key={index}>
                                    <View 
                                        style={{
                                            ...styles.bookItem,
                                        }}
                                    >
                                        <Image 
                                            source={require('../assets/images/5ca5b113bcbc8129b981e696.jpg')}
                                            style={styles.img}
                                        ></Image>
                                        <Text 
                                            style={{
                                                ...styles.text,
                                            }}
                                            numberOfLines={1}
                                        >{item.bookname}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </Container>
        );
    }

    static navigationOptions = {
        header: null,
    };


    _handleLearnMorePress = () => {
        // 异步打开手机默认浏览器
        WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
    };
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'blue',
    },
    contentContainer: {
        paddingLeft: 20,
        paddingRight: 3,
        paddingTop: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    bookItem: {
        marginVertical: 10, 
        marginRight: 19,
        width: 110,
        height: 170,
        // backgroundColor: 'red',
    },
    img: {
        width:  110,
        height: 150,
    },
    text: {
        textAlign: 'center',
    },
    // welcomeImage: {
    //     width: 100,
    //     height: 80,
    //     resizeMode: 'contain',
    //     marginTop: 3,
    //     marginLeft: -10,
    // },
    getStartedContainer: {
        
        alignItems: 'center',
        // 水平间距，应该就是left&right
        marginHorizontal: 50,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    // tabBarInfoContainer: {
    //     position: 'absolute',
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     ...Platform.select({
    //         ios: {
    //             shadowColor: 'black',
    //             shadowOffset: { height: -3 },
    //             shadowOpacity: 0.1,
    //             shadowRadius: 3,
    //         },
    //         android: {
    //             elevation: 20,
    //         },
    //     }),
    //     alignItems: 'center',
    //     backgroundColor: '#fbfbfb',
    //     paddingVertical: 20,
    // },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    marginHorizontal: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
