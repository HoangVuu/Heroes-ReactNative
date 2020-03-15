import React, { Component } from 'react'
import { Text, View, SectionList } from 'react-native'
import {Icon} from 'react-native-vector-icons/AntDesign'
export default class sessionList extends Component {

    array = [
        {
            "title": "Thông tin tài khoản",
            "data": [
                { "id": "1", "name": "Hồ sơ cá nhân" },
                { "id": "2", "name": "Đổi mật khẩu" },
            ]
        },
        {
            "title": "Thông tin liên hệ",
            "data": [
                { "id": "3", "name": "Bạn bè" },
                { "id": "4", "name": "Nhóm" },
                { "id": "5", "name": "Kỷ niệm" },
                { "id": "6", "name": "Tìm kiếm quanh đây" },
                { "id": "7", "name": "Hẹn hò" },
            ],
        },
        {
            "title": "Cài đặt",
            "data": [
                { "id": "8", "name": "Trợ giúp" },
                { "id": "9", "name": "Cài đặt & quyền riêng tư" },
                { "id": "10", "name": "Điều khoản chính sách" },
            ],
        },
    ]

    render() {
        return (
            <View>
                <SectionList
                    sections={this.array}
                    renderSectionHeader={({section}) =>{ // bóc tách phần tử item, thay cho cách viết item=this.item
                        return <Text>
                            {section.title}
                        </Text>
                    }}

                    renderItem = {({item})=>{
                    return <Text> {item.name}</Text>
                    }}

                    renderSectionFooter= {({section}) =>{
                    return <Text>{section.title}</Text>
                    }}
                >

                </SectionList>
            </View>
        )
    }
}
