import React, { Component } from 'react'
import { Text, View, Image ,Dimensions, TouchableOpacity} from 'react-native'
import {Grid,Col,Row} from 'react-native-easy-grid'
import GlassesItem from './GlassesItem'
const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export default class Glasses extends Component {
    state={
      glassCurrent:   { id: 6, price: 30, name: 'PRADA P9700', url: require(`../glassesImage/v6.png`), desc: `Light pink square lenses define these sunglasses,ending with a
      mother of pearl effect tip. ` },
    }

     arrProduct = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: require('../glassesImage/v1.png'), desc: `Light pink square lenses define these sunglasses,ending with a
       mother of pearl effect tip.` },
        { id: 2, price: 50, name: 'GUCCI G8759H', url: require(`../glassesImage/v2.png`), desc: `Light pink square lenses define these sunglasses,ending with a
       mother of pearl effect tip.` },
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: require('../glassesImage/v3.png'), desc: `Light pink square lenses define these sunglasses,ending with a
       mother of pearl effect tip. ` },
        { id: 4, price: 30, name: 'DIOR D6005U', url: require('../glassesImage/v4.png'), desc: `Light pink square lenses define these sunglasses,ending with a
       mother of pearl effect tip. ` },
        { id: 5, price: 30, name: 'PRADA P8750', url: require('../glassesImage/v5.png'), desc: `Light pink square lenses define these sunglasses,ending with a
       mother of pearl effect tip. ` },
         { id: 6, price: 30, name: 'PRADA P9700', url: require(`../glassesImage/v6.png`), desc: `Light pink square lenses define these sunglasses,ending with a
        mother of pearl effect tip. ` },
        { id: 7, price: 30, name: 'FENDI F8750', url: require('../glassesImage/v7.png'), desc: `Light pink square lenses define these sunglasses,ending with a
       mother of pearl effect tip. ` },
        { id: 8, price: 30, name: 'FENDI F8500', url: require('../glassesImage/v8.png'), desc: `Light pink square lenses define these sunglasses,ending with a
       mother of pearl effect tip. ` },
        { id: 9, price: 30, name: 'FENDI F4300', url: require('../glassesImage/v9.png'), desc: `Light pink square lenses define these sunglasses,ending with a
       mother of pearl effect tip. ` },
       ];

       renderItem =() =>{
           return this.arrProduct.map((glassItem,index) =>{
               return  <Col key={index} style={{backgroundColor:'white', width:widthDevice/3, height:75}}>
               {/* <TouchableOpacity onPress={()=>{this.changeGlassItem(glassItem)}}> */}
               {/* <View>
                   <Image source={glassItem.url} resizeMode="stretch" style={{width:widthDevice/4, height:50, margin:'10%', marginTop:'15%'}}/>
               </View>    
               dùng cách truyền props qua cho component con là: Glasses */}
                <GlassesItem item={glassItem} handleChangeGlass={this.changeGlassItem}/>
               {/* </TouchableOpacity> */}
           </Col>
           })
       }

changeGlassItem= (newGlassItem) => {
    this.setState({
        glassCurrent:newGlassItem
    })
}

    render() {
        return (
              <Grid>
                  <Row style={{maxHeight: heightDevice/2}}>
                      <Image style={{height:heightDevice/2, marginLeft:'-3%', marginTop:'10%'}} resizeMode='stretch' source={require('../glassesImage/model.jpg')}></Image>
                      <Image source={this.state.glassCurrent.url} resizeMode='stretch' style={{position:'absolute',marginLeft:'5%', height:'10%', width:'60%', marginLeft:'20%', marginTop:'30%'}}/>
                 <View style={{position:'absolute',width:widthDevice, height:'30%',backgroundColor:'rgba(132,112,255,0.4)', bottom:0}}>
                     <Text>12333</Text>
                 </View>
                  </Row >
                   
                  <Row style={{flexWrap:'wrap'}}>
                      {this.renderItem()}
                  </Row>

              </Grid>
  
        )
    }
}
