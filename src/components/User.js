import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class User extends Component {



    render() {
        let { item } = this.props
        return (
            <View>
                <Image borderRadius={45} marginLeft={'2%'} marginTop={'2%'} resizeMode='cover' source={item.avatar}
                    style={{ height: 90, width: 90, justifyContent: 'center' }} />
                <Text style={{ marginTop: '5%', fontWeight: "bold", textAlign: 'center' }} >{item.name}</Text>
            </View>
        )
    }
}
