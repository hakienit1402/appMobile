import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {AuthContext} from '../navigations/AuthProvider';
const HistoryItems = () => {
  return (
    <View style={styles.history_item}>
      <View style={{top: 8, right: 20, position: 'absolute'}}>
        <Text style={{fontSize: 18}}>20/12/2020</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: 20,
          alignItems: 'center',
        }}>
        <Image
          source={require('../src/assets/java.png')}
          resizeMode={'stretch'}
          style={{width: 80, height: 80}}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Đề 1</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>7/10</Text>
        </View>
      </View>
      <View style={{bottom: 6, right: 40, position: 'absolute'}}>
        <Text style={{fontSize: 16, color: 'blue'}}>Làm lại</Text>
      </View>
    </View>
  );
};
const Info = () => {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titlebar}>
          <Icon
            name="arrow-left"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Icon name="more-horizontal" size={24} color="black" />
        </View>

        <View style={{alignSelf: 'center'}}>
          <View style={styles.profileImage}>
            <Image
              source={{uri: `${user.photoUrl}`}}
              style={styles.image}
              resizeMode={'center'}
            />
          </View>
          <View style={styles.add}>
            <Icon name="camera" size={24} color="#ffffff" />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            {user.displayName}{' '}
            <Icon
              name="edit-3"
              size={20}
              color="blue"
              style={{marginLeft: 8}}
            />
          </Text>

          <Text style={styles.description}>{user.email}</Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#D8D8D8',
            marginVertical: 10,
          }}
        />
        <View style={styles.info}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Lịch sử</Text>
          <View style={styles.history_container}>
            <HistoryItems />
            <HistoryItems />
            <HistoryItems />
            <HistoryItems />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const {height} = Dimensions.get('screen');
const height_avatar = height * 0.6 * 0.4;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  name: {
    color: 'black',
    fontSize: 28,
  },
  description: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editname: {
    color: 'blue',
    fontSize: 13,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  titlebar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImage: {
    width: height_avatar,
    height: height_avatar,
    borderRadius: 100,
    overflow: 'hidden',
  },
  add: {
    backgroundColor: 'gray',
    opacity: 0.8,
    position: 'absolute',
    bottom: 6,
    right: 5,
    width: 35,
    height: 35,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 30,
  },
  text_info: {
    marginLeft: 10,
  },
  history_item: {
    width: '100%',
    flex: 1,
    height: 100,
    backgroundColor: '#ffffff',
    marginVertical: 10,
    justifyContent: 'center',
    elevation: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default Info;
