import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class props extends Component {
    render() {
    let {hocVienProp} =this.props
        return (
            <View>
                <Text> {hocVienProp.ten} </Text>
                <Text> {hocVienProp.diaChi} </Text>
            </View>
        )
    }
}
