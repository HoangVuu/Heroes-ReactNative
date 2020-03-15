import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { Col, Grid, Row } from 'react-native-easy-grid'
import Icon from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/Ionicons'
import User from './User'
import UserSuggest from './UserSuggest'

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class Heroes extends Component {

    userList = [
        { name: 'wanda', avatar: require('../assets/imgs/avenger/wanda.jpg') },
        { name: 'yasuo', avatar: require('../assets/imgs/avenger/yasuo.jpg') },
        { name: 'captain', avatar: require('../assets/imgs/avenger/captain.jpg') },
        { name: 'flash', avatar: require('../assets/imgs/avenger/flash.jpg') },
        { name: 'tony', avatar: require('../assets/imgs/avenger/ironman.jpeg') },
        { name: 'petter', avatar: require('../assets/imgs/avenger/spiderman.jpeg') },
    ]

    userSuggestions = [
        { name: 'strange', avatar: require('../assets/imgs/avenger/strange.jpg') },
        { name: 'kara', avatar: require('../assets/imgs/avenger/suppergirl.jpg') },
        { name: 'diana', avatar: require('../assets/imgs/avenger/wonderwoman.jpg') },
        { name: 'natasha', avatar: require('../assets/imgs/avenger/blackwidow.jpeg') },
        { name: 'strange', avatar: require('../assets/imgs/avenger/strange.jpg') },
        { name: 'kara', avatar: require('../assets/imgs/avenger/suppergirl.jpg') },
        { name: 'diana', avatar: require('../assets/imgs/avenger/wonderwoman.jpg') },
        { name: 'natasha', avatar: require('../assets/imgs/avenger/blackwidow.jpeg') },
        { name: 'strange', avatar: require('../assets/imgs/avenger/strange.jpg') },
        { name: 'kara', avatar: require('../assets/imgs/avenger/suppergirl.jpg') },
        { name: 'diana', avatar: require('../assets/imgs/avenger/wonderwoman.jpg') },
        { name: 'natasha', avatar: require('../assets/imgs/avenger/blackwidow.jpeg') },
    ]

    renderItemUser = () => {
        return this.userList.map((user, index) => {
            return <View key={index} style={{ marginLeft: 10, marginTop: '2%', width: 95, height: 120 }}>
                <User item={user} />
            </View>
        })
    }

    renderItemSug = () => {
        return this.userSuggestions.map((user2, index) => {
            return <Row key={index}>
                <UserSuggest item2={user2} />
            </Row>
        })
    }


    render() {
        return (
            <Grid>
                <Row style={{ flex: 3, flexWrap: 'wrap', borderWidth: 0.7, borderColor: '#dddddd' }} >
                    <View style={{ marginTop: '2%', width: widthDevice }}>
                        <Text style={{ fontSize: 20, marginLeft: '2%', fontWeight: "bold" }}> <Icon name="back-in-time" size={30} /> Danh sách tìm kiếm gần đây </Text>
                    </View>

                    <View >
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            {this.renderItemUser()}
                        </ScrollView>
                    </View>
                </Row>

                <Row style={{ flex: 9, flexWrap: 'wrap' }}>
                    <View style={{ marginTop: '3%', width: widthDevice, marginLeft: '4%', alignItems: 'baseline' }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}> <Icon1 name="ios-people" size={40} />  Gợi ý kết bạn </Text>
                    </View>

                    <View style={{ width: widthDevice, marginTop: '2%', marginLeft: '4%' }}>
                        <ScrollView pagingEnabled={true}>
                            {this.renderItemSug()}
                        </ScrollView>
                    </View>


                </Row>

            </Grid>
        )
    }
}
