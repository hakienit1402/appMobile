import React, { useContext } from 'react';
import {Text, Image, View, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { AppContext } from '../ContextAPI/AppContext';
const Language = ({item}) => {
const image = item.logo
const navigation= useNavigation();
// const {handleCountTopic,countTopic} = useContext(AppContext);
const goTopic = (item) =>{
  // handleCountTopic(item.name)
  navigation.navigate('TopicScreen',{
    language:item,
  })
}
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={()=>goTopic(item)}>
      <Image
        source={{uri: image }}
        style={styles.logo}
        resizeMode={'stretch'}
      />
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: '80%'}}>
        <Text style={styles.language}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius:50
  },
  language: {
    color: 'blue',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Language;
