import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Moment from 'moment';
const HistoryItem = ({history}) => {
  // console.log(Moment(history.createdAt).format('DD/MM/YYYY HH:MM:SS'))
  
    return (
      <View style={styles.history_item}>
        <View style={{top: 8, right: 20, position: 'absolute'}}>
          <Text style={{fontSize: 18}}>
            {history.date}
            </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <Image
            source={{uri:history.logoLanguage}}
            resizeMode={'stretch'}
            style={{width: 80, height: 80}}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 25,
            }}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>Topic {history.topic}</Text>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>{history.score}/10</Text>
          </View>
        </View>
        {/* <View style={{bottom: 6, right: 40, position: 'absolute'}}>
          <Text style={{fontSize: 16, color: 'blue'}}>Làm lại</Text>
        </View> */}
      </View>
    );
  };
  const {height,width} = Dimensions.get('window')
const styles = StyleSheet.create({
    history_item: {
        width: '100%',
        height: height*0.13,
        backgroundColor: '#ffffff',
        marginVertical: 30,
        justifyContent: 'center',
        elevation: 15,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
      },
})
export default HistoryItem
