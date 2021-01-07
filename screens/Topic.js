import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native'
const Topic = ({route}) => {
  const {language} = route.params;
  const navigation= useNavigation();
  const data = [
    {key: '1'},
    {key: '2'},
    {key: '3'},
    {key: '4'},
    {key: '5'}
  ];
  const _renderItem = ({item, index}) => {
      if (item.empty){
          return (
          <View style={[styles.containerItem,{backgroundColor:'transparent',elevation:0}]}/>
          )
      } else {
    return (
      <TouchableOpacity style={styles.containerItem} activeOpacity={0.5} onPress={()=>navigation.navigate('MainScreen',{
        topic:item
      })}>
        <Image
          source={{uri: language.image}}
          style={styles.logoItem}
          resizeMode={'stretch'}
        />
        <View style={styles.content}>
          <Text style={styles.text_topic}>Đề {item.key}</Text>
        </View>
      </TouchableOpacity>
    );
}
  };
  const numberCols = 2;
  const formatData = (data,numberCols) =>{
      const numberOfRow = Math.floor(data.length/numberCols);
      let numberLastRow = data.length - (numberOfRow*numberCols)
      while (numberLastRow !== numberCols && numberLastRow!==0){
          data.push({key:'blank',empty:true})
          numberLastRow++
      }
      return data
  }
  return (
    <View style={styles.container}>
      <View style={styles.language}>
        <Animatable.Image
          animation="bounceIn"
          source={{uri: language.image}}
          style={styles.logo}
          resizeMode={'stretch'}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Choose {language.name} topic
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={formatData(data,numberCols)}
        renderItem={_renderItem}
        style={{flex:1}}
        numColumns={numberCols}
        keyExtractor={(topic, index) => index.toString()}
        // onEndReached
      />
    </View>
  );
};
const {height} = Dimensions.get('screen');
const height_logo = height * 0.6 * 0.3;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#ffffff',
  },
  language: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  containerItem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 15,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  logoItem: {
    width: height * 0.4 * 0.3,
    height: height * 0.4 * 0.3,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_topic: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
export default Topic;
