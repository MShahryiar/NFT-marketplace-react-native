import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets} from '../constants';
import { CircleButton, RectButton } from './Button';
import {NFTTitle,EthPrice,SubInfo, ImageCmp} from './SubInfo';


const NFTCard = ({data}) => {

  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: 'lightgrey',
      borderRadius:SIZES.font,
      marginBottom:SIZES.extraLarge,
      margin:SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{width:'100%', height:250}}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width:"100%",
            height:'100%',
            borderTopLeftRadius:SIZES.font,
            borderTopRightRadius:SIZES.font,
            borderBottomLeftRadius:SIZES.font,
            borderBottomRightRadius:SIZES.font,

          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10}/>
      </View>
          <SubInfo/>
          <View style={{
            width:'100%', 
            padding:SIZES.font}}>
              <NFTTitle 
                title={data.name}
                subtitle={data.creator}
                titleSize={SIZES.large}
                subTitleSize={SIZES.small}
              />
            </View>
            <View style={{
              marginTop:SIZES.font,
              padding:SIZES.font,
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:"center",
            }}>
                <EthPrice price={data.price}/>
                <RectButton 
                  minWidth={120}
                  fontSize={SIZES.font}
                  handlePress={() => navigation.navigate("Details", {data})}
                />
            </View>
    </View>
  )
}

export default NFTCard

 {/* <Text>{data.name}</Text> */}
// <Text>{props.data.name}</Text>