import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DrawerContent from '../components/DrawerContent';
import AppPro from '../screens/AppPro';
import Home from '../screens/Home';
import Info from '../screens/Info';
import Topic from '../screens/Topic';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();

const HoomStackScreen = () => {
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
      {/* <HomeStack.Screen
        name="MainScreen"
        component={Main}
        options={{
          headerShown: false,
        }}
      /> */}
      <HomeStack.Screen
        name="MainScreen"
        component={AppPro}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};
function DrawerHome() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HoomStackScreen} />
    </Drawer.Navigator>
  );
}
const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={DrawerHome}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
