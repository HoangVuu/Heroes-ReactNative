import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class List extends Component {

    state=[
       { img1:require('../../imgs/emoji/e1.png')},
       { img2:require('../../imgs/emoji/e2.png')},
       { img3:require('../../imgs/emoji/e3.png')},
       { img4:require('../../imgs/emoji/e4.png')},
       { img5:require('../../imgs/emoji/e5.png')}
    ]

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
