import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
export default class FlatList1 extends Component {

    mangHocVien= [
        {ma:1, tenHV:'A', tuoi: 19},
        {ma:2, tenHV:'B', tuoi: 20},
        {ma:3, tenHV:'C', tuoi: 1},
        {ma:4, tenHV:'AA', tuoi: 10},
        {ma:5, tenHV:'AD', tuoi: 2}

     ];





    render() {
        return (
            <View>
                <FlatList 
                    data={this.mangHocVien}
                    renderItem={({item}) => {
                        return <View>
                            <Text>{item.tenHV} <Icon name ='checkcircle'></Icon></Text>
                        </View>
                            }}
                            numColumns={3}
                 >
                    
                </FlatList>
            </View>
        )
    }
}
