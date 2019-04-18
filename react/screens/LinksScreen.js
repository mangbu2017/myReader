import React from 'react';
import { 
	StyleSheet,
	View, 
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
} from 'native-base';
import { observer } from 'mobx-react';
import BookList from '../store/list';

// @observer
export default class LinksScreen extends React.Component {

	constructor(props) {
		super(props);
	}

	linkToBookList = (type) => {
		BookList.setType(type);
		this.props.navigation.navigate('BookList');
	}

	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Body>
						<Title style={{
							fontSize: 14,
						}}>分类</Title>
					</Body>
					<Right>
						<Button transparent onPress={this.linkToBookList}>
							<Icon name='ios-search' />
						</Button>
					</Right>
				</Header>
				<Grid>
				<Col style={{ 
						height: 102,
						alignItems: 'center', 
						justifyContent: 'center',
					}}>
						<Button 
							style={{
								height: 100,
							}}
							bordered 
							light 
							block
							onPress={() => {
								this.linkToBookList('玄幻魔法');
							}}
						>
							<Text style={{
								fontSize: 18,
								color: '#000',
							}}>玄幻魔法</Text>
						</Button>
					</Col>
					<Col style={{ 
						height: 102,
						alignItems: 'center', 
						justifyContent: 'center',
					}}>
						<Button 
							style={{
								height: 100,
							}}
							bordered 
							light 
							block
							onPress={() => {
								this.linkToBookList('武侠修真');
							}}
						>
							<Text style={{
								fontSize: 18,
								color: '#000',
							}}>武侠修真</Text>
						</Button>
					</Col>
				</Grid>
				<Grid>
				<Col style={{ 
						height: 102,
						alignItems: 'center', 
						justifyContent: 'center',
					}}>
						<Button 
							style={{
								height: 100,
							}}
							bordered 
							light 
							block
							onPress={() => {
								this.linkToBookList('都市言情');
							}}
						>
							<Text style={{
								fontSize: 18,
								color: '#000',
							}}>都市言情</Text>
						</Button>
					</Col>
					<Col style={{ 
						height: 102,
						alignItems: 'center', 
						justifyContent: 'center',
					}}>
						<Button 
							style={{
								height: 100,
							}}
							bordered 
							light 
							block
							onPress={() => {
								this.linkToBookList('历史军事');
							}}
						>
							<Text style={{
								fontSize: 18,
								color: '#000',
							}}>历史军事</Text>
						</Button>
					</Col>
				</Grid>
				<Grid>
				<Col style={{ 
						height: 102,
						alignItems: 'center', 
						justifyContent: 'center',
					}}>
						<Button 
							style={{
								height: 100,
							}}
							bordered 
							light 
							block
							onPress={() => {
								this.linkToBookList('侦探推理');
							}}
						>
							<Text style={{
								fontSize: 18,
								color: '#000',
							}}>侦探推理</Text>
						</Button>
					</Col>
					<Col style={{ 
						height: 102,
						alignItems: 'center', 
						justifyContent: 'center',
					}}>
						<Button 
							style={{
								height: 100,
							}}
							bordered 
							light 
							block
							onPress={() => {
								this.linkToBookList('网游动漫');
							}}
						>
							<Text style={{
								fontSize: 18,
								color: '#000',
							}}>网游动漫</Text>
						</Button>
					</Col>
				</Grid>
				<Grid>
				<Col style={{ 
						height: 102,
						alignItems: 'center', 
						justifyContent: 'center',
					}}>
						<Button 
							style={{
								height: 100,
							}}
							bordered 
							light 
							block
							onPress={() => {
								this.linkToBookList('科幻小说');
							}}
						>
							<Text style={{
								fontSize: 18,
								color: '#000',
							}}>科幻小说</Text>
						</Button>
					</Col>
					<Col style={{ 
						height: 102,
						alignItems: 'center', 
						justifyContent: 'center',
					}}>
						<Button 
							style={{
								height: 100,
							}}
							bordered 
							light 
							block
							onPress={() => {
								this.linkToBookList('恐怖灵异');
							}}
						>
							<Text style={{
								fontSize: 18,
								color: '#000',
							}}>恐怖灵异</Text>
						</Button>
					</Col>
				</Grid>
				<Grid>
				<Col style={{ 
						height: 102,
						alignItems: 'center', 
						justifyContent: 'center',
					}}>
						<Button 
							style={{
								height: 100,
							}}
							bordered 
							light 
							block
							onPress={() => {
								this.linkToBookList('散文诗词');
							}}
						>
							<Text style={{
								fontSize: 18,
								color: '#000',
							}}>散文诗词</Text>
						</Button>
					</Col>
					<Col style={{ 
						height: 102,
						alignItems: 'center', 
						justifyContent: 'center',
					}}>
						<Button 
							style={{
								height: 100,
							}}
							bordered 
							light 
							block
							onPress={() => {
								this.linkToBookList('其他类型');
							}}
						>
							<Text style={{
								fontSize: 18,
								color: '#000',
							}}>其他类型</Text>
						</Button>
					</Col>
				</Grid>
			</Container>
		);
	}

	static navigationOptions = {
		header: null,
	};
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
	},
});
