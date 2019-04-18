import React, {
	StyleSheet,
} from 'react';
import {
	TouchableOpacity,
	FlatList,
	View,
	Image,
} from 'react-native'
import { 
	Header,
	Container,
	Title,
	Body,
	Right,
	Button,
	Icon,
	Segment,
    Text,
    Left,
} from 'native-base';
import { observer } from 'mobx-react';
import { observable, computed } from 'mobx';
import List from '../store/list';

@observer
export default class BookList extends React.Component {

	_renderSeparator() {
		return (
			<View style={{
				height: 1,
				backgroundColor: '#999',
			}}></View>
		)
	}

	_renderItem = ({item}) => {
		return (
			<TouchableOpacity
                onPress={() => {
                }}
            >
                <View style={{
					height: 150,
					flexDirection: 'row',
					alignItems: 'center',
               	}}>
					<Image 
						source={{
							uri: item.cover,
						}}
						style={{
							height: 130,
							width: 100,
							marginLeft: 8,
						}}
					></Image>
					<View style={{
						width: 230,
						marginLeft: 10,
					}}>
						<View style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'flex-end',
						}}> 
							<Text numberOfLines={1}>{item.bookname}</Text>
							<Text 
								style={{
									fontSize: 14,
									color: '#333',
								}}
							>{item.author}</Text>
						</View>
						<Text 
							style={{
								fontSize: 14,
							}}
						>{item.category}</Text>
						<Text 
							style={{
								fontSize: 14,
							}}
							numberOfLines={2}
						>{item.intro}</Text>
					</View>
                </View>
            </TouchableOpacity>
		)
	}

    // fetch listData
    componentDidMount() {
		List.fetchCategory(List.type);
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
							fontSize: 14,
						}}>{List.type}</Title>
					</Body>
				</Header>
				<FlatList
				    // 间隔渲染的组件
					ItemSeparatorComponent={this._renderSeparator}
					data={List.listData}
					renderItem={this._renderItem}
					keyExtractor={item => item._id}
					// onEndReached={this.loadChapter}
					onEndReachedThreshold={0.5}
				/>
				
			</Container>
		);
	}

	static navigationOptions = {
		header: null,
	};
}