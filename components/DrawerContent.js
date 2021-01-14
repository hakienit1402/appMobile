import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Caption,
  Drawer, Switch, Text,
  Title,
  TouchableRipple,
  useTheme
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import { AuthContext } from '../navigations/AuthProvider';
const DrawerContent = ({navigation}) => {
  const {logout,user} = useContext(AuthContext)
  const paperTheme = useTheme();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15,justifyContent:'space-between'}}>
                <View style={{flexDirection:'row'}}>
                <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{ marginLeft:15, flexDirection: 'column'}}>
                <Title style={styles.title}>{user.displayName}</Title>
                <Caption style={styles.caption}>{user.email}</Caption>
              </View>
                </View>
               
                
              <View style={{}}>
                  <Icon name='chevron-left' size={40} color={'black'} onPress={()=>navigation.closeDrawer()}/>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="user" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                navigation.navigate('InfoScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark" color={color} size={size} />
              )}
              label="Bookmarks"
              onPress={() => {
                navigation.navigate('BookmarkScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="settings" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="info" color={color} size={size} />
              )}
              label="About us"
              onPress={() => {
                navigation.navigate('SupportScreen');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
            // onPress={() => {toggleTheme()}}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="log-out" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => logout()}
        />
      </Drawer.Section>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    // marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default DrawerContent;
