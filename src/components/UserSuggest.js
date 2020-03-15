import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

export default class UserSuggest extends Component {
    render() {

        let { item2 } = this.props
        return (
            <View style={{ marginBottom: '2%', borderWidth: 0.8, borderColor: '#dddddd', flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(192,192,192,0.2)' }}>
                <Image borderRadius={45} marginTop={'2%'} mar resizeMode="cover" source={item2.avatar}
                    style={{ marginLeft: '3%', marginBottom: '2%', height: 90, width: 90, alignItems: 'center' }} />
                <View style={{ justifyContent: 'center', marginLeft: '3%' }}>
                    <Text>{item2.name}</Text>
                    <Text>15 ban chung</Text>
                </View>

                <TouchableOpacity style={{ marginLeft: '20%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', width: '25%', height: '45%', borderRadius: 30 }}>
                    <View >
                        <Text style={{ color: 'white' }}>
                            Kết bạn
                </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
