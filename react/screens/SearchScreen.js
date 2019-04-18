import React from 'react';
import { observer } from 'mobx-react'
import { observable } from 'mobx';

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

@observer
export default class BookListScreen extends React.Component {

    @observable keyword = '';

    // 写法不需要bind(this)
    navToReader = (item) => {
        UserInfo.checkReadingBook(item);
        this.props.navigation.navigate('Reader');
    }

    search = () => {
        console.log(this.keyword);
    }
    
    render() {
        return (
            <Container style={styles.container}>
                {/** 滚动视图 */}
                <Header searchBar rounded>
                    <Item style={{
                        width: 50,
                    }}>
                        <Icon name="ios-search" />
                        <Input 
                            placeholder="请输入书名" 
                            value={this.keyword}
                            onChangeText={(text) => {
                                this.keyword = text;
                            }}
                        />
                    </Item>
                    {/** transparent隐藏btn边框 */}
                    <Button 
                        style={{
                            width: 80,
                            height: 60,
                            fontSize: 14,
                            // backgroundColor: 'black',
                        }}
                        onPress={this.search} 
                        transparent
                    >
                        <Text>搜索</Text>
                    </Button>
                </Header>
            </Container>
        );
    }

    static navigationOptions = {
        header: null,
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
});
