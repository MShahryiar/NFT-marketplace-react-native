import React from 'react'
import { Text, View, SafeAreaView, StatusBar, FlatList } from 'react-native'
import {COLORS, SIZES, SHADOWS,FONTS, assets} from '../constants';
import {CircleButton,RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid} from '../components';

const Details = ({route, navigation}) => {
  // When we use Stack.screens, NavigationCOntainer, we get route as passed down to our component. We can get data from that passed down data or Params using Route
  //console.log(route)

  const {data} = route.params;
  // console.log('===========================================================')
  // console.log(data)
  // console.log('Name : ', data.name)
  // console.log('===========================================================')

  
  return (
   <SafeAreaView style={{flex:1}}>
     <FocusedStatusBar 
        barStyle="dark-content"
        backgroundColor='transparent'
        translucent={true}
     />
     <View style={{
       width:'100%',
       position:'absolute',
       bottom:0,
       paddingVertical:SIZES.font,
       justifyContent:'center',
       alignItems:'center', 
       backgroundColor:'rgb(255,255,255,0.5)',
       zIndex:1,
     }}>
       <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
       />
     </View>
    <FlatList
      data={data.bids}
      renderItem={({item})=> <DetailsBid bid={item} />} 
      keyExtractor = {(item)=> item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:SIZES.extraLarge*3}}
    />
   </SafeAreaView>
  )
}

export default Details;