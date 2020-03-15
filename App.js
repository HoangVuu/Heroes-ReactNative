/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Row,Col, Grid,ScrollView} from 'react-native-easy-grid'
import {
  SafeAreaView,
  StyleSheet,

  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Order from './src/assets/imgs/components/Order';
import Glasses from './src/assets/imgs/components/Glasses';
import Props from './src/assets/imgs/components/props';
import FlatList1 from './src/assets/imgs/components/FlatList1'
import SessionList from './src/assets/imgs/components/sessionList';
import ScrollViewDemo from './src/assets/imgs/components/scrollView'
import Heroes from './src/components/Heroes'
const App= ()  => {
  let hocVien={ ma:1, ten: 'Vu', diaChi:'aaaaaaaaaaaaa'}
  return (
    <>
   {/* <Glasses/>  */}

    {/* <Order/> */}
     {/* <Grid style={{flex:1}}>
       <View  style={{ flex:1,backgroundColor:'green', justifyContent:'center', alignItems:'center'}}>
         <Text>Bạn đang cảm thấy?</Text>
       </View>
       <Row style={{ flex:2,backgroundColor:'red', justifyContent:'center'}}>
         <Text >1211111112123</Text>
       </Row>
       <Row  style={{ flex:3,backgroundColor:'yellow'}}>

       </Row>
     </Grid> */}

     {/* <Props hocVienProp={hocVien}/> */}
     {/* <FlatList1/> */}
     {/* <SessionList/> */}
     {/* <ScrollViewDemo/> */}
     <Heroes/>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
