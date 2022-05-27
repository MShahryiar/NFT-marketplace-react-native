<<<<<<< HEAD
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {useFonts} from 'expo-font';
import Home from './screens/Home';
import Details from './screens/Details';
=======
import { StyleSheet, StatusBar,Text, View } from 'react-native';
>>>>>>> c0aee10eb12c2f96a1bdda229311793c2002be01


const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme, 
  colors:{
    ...DefaultTheme.colors,
    background:'transparent'
  }
}

const App = () => {
  const [loaded] = useFonts({
       InterBold: require('./assets/fonts/Inter-Bold.ttf'),
       InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
       InterMediumBold: require('./assets/fonts/Inter-Medium.ttf'),
       InterRegularBold: require('./assets/fonts/Inter-Regular.ttf'),
       InterLightBold: require('./assets/fonts/Inter-Light.ttf'),

  });

  if (!loaded) return null;
  return (
<<<<<<< HEAD
   <NavigationContainer theme={theme}>
     <Stack.Navigator   
          screenOptions={{ headerShown: tr}}
          initialRouteName="Home">
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen  name="Details" component={Details}/>
     </Stack.Navigator>
   </NavigationContainer>
=======
    <View style={styles.container}>
      <Text>Hello World!!</Text>
      <StatusBar style="auto" />
    </View>
>>>>>>> c0aee10eb12c2f96a1bdda229311793c2002be01
  );
}


export default App;