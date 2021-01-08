import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Splash from '../screens/Splash';
const Stack = createStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
          name="SplashScreen"
          component={Splash}
          options={{
            headerShown: false,
          }}/>
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

export default AuthStack
