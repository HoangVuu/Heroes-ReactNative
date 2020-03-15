import React, { Component } from 'react'
import { Text, View, Image , Dimensions, TouchableOpacity, ScrollView} from 'react-native'
import { Grid, Row, Col} from 'react-native-easy-grid'

const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class Order extends Component {
    data = [
            {maHV: 1, hoTen: 'Henry Lee', SDT: '121212121'},
            {maHV: 2, hoTen: 'Henry ', SDT: '12123'},
            {maHV: 3, hoTen: 'Henry A', SDT: '11111111'},
            {maHV: 4, hoTen: 'Henry B', SDT: '1212199'},
    ]

    foodData = [
        { id: 1, tenMon: 'Gà nướng', gia: 10, hinhAnh: require('../food/product1.jpg')},
        { id: 2, tenMon: 'Bò nướng', gia: 20, hinhAnh: require('../food/product2.jpg')},
        { id: 3, tenMon: 'Mì ý', gia: 30, hinhAnh: require('../food/product3.jpg')},
        { id: 4, tenMon: 'Heo hun khói', gia: 40, hinhAnh: require('../food/product4.jpg')},
        { id: 5, tenMon: 'Gà ri', gia: 50, hinhAnh: require('../food/product5.jpg')},
        { id: 6, tenMon: 'Sườn nướng', gia: 60, hinhAnh: require('../food/product6.jpg')},

    ]

    renderHV = () => {
        //Cách 1
        // var arrContent=[] // mảng jsx 
        // for(var i=0; i<this.data.length;i++){
        //     console.log(i);
        //     var comHocVien=<View key={i}>
        //         <Text>MaHC: {this.data[i].maHV}</Text>
        //         <Text>Ten {this.data[i].hoTen}</Text>
        //         <Text>SDT: {this.data[i].SDT}</Text>
        //     </View>;
        //     arrContent.push(comHocVien)
        // }   
        // console.log(arrContent)    
        // return arrContent; // trả về mảng jsx comHocVien để render ra giá trị 
        
        //Cách 2
        var mangHV = this.data.map((hocvien, index) => { // có thể viết ngắn thành var mangHV = this.data.map(({maHV,Ten,SDT}, index) => {

            let {maHV, hoTen, SDT}= hocvien  // có thể đưa lên dòng trên để viết ngắn

            return <View key={index}>
                <Text>MaHC: {maHV}</Text>
                <Text>Ten {hoTen}</Text>
                <Text>SDT: {SDT}</Text>
            </View>
        });
        return mangHV;

    }

    renderFood= () =>{
        return this.foodData.map(({id,tenMon,gia,hinhAnh}, index) => {
            return  <Col style={{width:widthDevice/2, height:200}}>
            <View style={{padding:'18%'}}>
            <Text>{tenMon}</Text>
            <Image style={{width:150,height:75}} resizeMode="contain" source={hinhAnh} ></Image>
        <Text> {gia}</Text>
          <TouchableOpacity>
              <View style={{backgroundColor:'#FFCC66', width:150, alignItems:'center', padding: 5}}>
                  <Text>Đặt món</Text>
              </View>
          </TouchableOpacity>
            </View>
            </Col>
        })
    }
    render() {
        return (
            <ScrollView>
           <Grid>
               <Row  style={{maxHeight: 200}} >
                   <Image style={{height:200}} resizeMode="stretch"  source={require('../food/imageMenu.jpg')}></Image>
               </Row>
               <Row style={{flexWrap:'wrap'}}>
                  
                  {this.renderFood()}
               </Row>
           </Grid>
           </ScrollView>
        )
    }
}
