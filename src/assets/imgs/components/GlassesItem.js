import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class GlassesItem extends Component {
    render() {
    let {item}=this.props // item=this.props.item
        return (
            <TouchableOpacity onPress={() =>(
                this.props.handleChangeGlass(item)
            )}>
            <View >
                {/* <Text> {item.name}</Text> */}
                   <Image source={item.url} resizeMode="stretch" style={{width:widthDevice/4, height:50, margin:'10%', marginTop:'15%'}}/>
               </View>
               </TouchableOpacity>
            
        )
    }
}
