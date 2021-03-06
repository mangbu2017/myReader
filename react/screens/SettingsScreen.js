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
} from 'native-base';
import { observer } from 'mobx-react';
import { observable, computed } from 'mobx';
import API from '../api/index';
import Detail from '../store/detail';

const getRank = API.getRank;

@observer
export default class SettingsScreen extends React.Component {
	@observable all = true;
	@observable month = false;
	@observable week = false;
	@observable listData = [];

	// 没用上
	@computed
	get computedListData() {
		return Array.from(this.listData);
	}

	updateListData = (type) => {
		getRank(type).then(res => {
			this.listData = res.data;
		}).catch(err => {
			console.log('getRank.error', err)
		});
	}

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
					console.log('跳转至详情页');
					Detail.setDetail(item);
					this.props.navigation.navigate('BookDetail');
                }}
            >
                <View style={{
					height: 150,
					// backgroundColor: 'red',
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
						// backgroundColor: 'red',
					}}>
						<View style={{
							flexDirection: 'row',
							// backgroundColor: 'green',
							justifyContent: 'space-between',
							alignItems: 'flex-end',
						}}> 
							<Text>{item.bookname}</Text>
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



	componentDidMount() {
		this.updateListData('all');
	}

	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title style={{
							fontSize: 14,
						}}>热门排行</Title>
					</Body>
					<Right>
						<Button transparent>
							<Icon name='ios-search' />
						</Button>
					</Right>
				</Header>
				<Segment>
					<Button first active={this.all} onPress={() => {
						if(!this.all) {
							this.updateListData('all');
						}
						this.all = true;
						this.month = false;
						this.week = false;
					}}>
						<Text>总榜</Text>
					</Button>
					<Button active={this.month} onPress={() => {
						if(!this.month) {
							this.updateListData('month');
						}
						this.all = false;
						this.month = true;
						this.week = false;
					}}>
						<Text>月榜</Text>
					</Button>
					<Button last active={this.week} onPress={() => {
						if(!this.week) {
							this.updateListData('week');
						}
						this.all = false;
						this.month = false;
						this.week = true;
					}}>
						<Text>周榜</Text>
					</Button>
				</Segment>
				<FlatList
				    // 间隔渲染的组件
					ItemSeparatorComponent={this._renderSeparator}
					data={this.listData}
					renderItem={this._renderItem}
					keyExtractor={item => item._id}
					onEndReached={this.loadChapter}
					onEndReachedThreshold={0.5}
				/>
				
			</Container>
		);
	}

	static navigationOptions = {
		header: null,
	};
}
// const styles = StyleSheet.create({
// 	headerTitle: {
// 		fontSize: 14,
// 	},
// });
