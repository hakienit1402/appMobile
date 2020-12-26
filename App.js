import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import RootStack from './RootStack';
import {Provider as PaperProvider} from 'react-native-paper';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Splash from './screens/Splash';
import Topic from './screens/Topic';
import Main  from './screens/Main';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Info from './screens/Info';
import DrawerContent from './components/DrawerContent';
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
// function DrawerRoutes(){
//   return(
//     <Drawer.Navigator initialRouteName='HomeScreen' drawerContent={props=><DrawerContent {...props}/>}>
//       <Drawer.Screen name='HomeScreen' component={Home}/>
//       <Drawer.Screen name='InfoScreen' component={Info}/>
//     </Drawer.Navigator>
//   )
// }
const HoomStackScreen = ()=>{
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
       <HomeStack.Screen
      name="HomeScreen"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
     <HomeStack.Screen
      name="InfoScreen"
      component={Info}
      options={{
        headerShown: false, 
      }}
    />
        <HomeStack.Screen
        name="TopicScreen"
        component={Topic}
        options={({route}) => ({title: route.params.language.name})}
          />
        <HomeStack.Screen
      name="MainScreen"
      component={Main}
      options={{
        headerShown: false,
      }}
    />
    </HomeStack.Navigator>
    
  )
}
const RootStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="SplashScreen"
      component={Splash}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SignInScreen"
      component={SignIn}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SignUpScreen"
      component={SignUp}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
  )
}
const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <PaperProvider>
      <NavigationContainer>
        {isLogin?
          <Drawer.Navigator initialRouteName='HomeScreen' drawerContent={props=><DrawerContent {...props}/>}>
          <Drawer.Screen name='HomeScreen' component={HoomStackScreen}/>
          {/* <Drawer.Screen name='InfoScreen' component={Info}/> */}
        </Drawer.Navigator>
        :
        <RootStackScreen/>

        }
    
    </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
