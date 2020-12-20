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
const Stack = createStackNavigator();
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <PaperProvider>
      {/* {isLogin? <Home/> :  */}
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
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
          <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TopicScreen"
            component={Topic}
            options={({route}) => ({title: route.params.language.name})}
          /> */}
           <Stack.Screen
            name="MainScreen"
            component={Main}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* } */}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
