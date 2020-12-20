import React, {useState, useEffect, useRef} from 'react';
import {Text, View, StyleSheet, StatusBar, Animated, Alert, FlatList} from 'react-native';
const Main = ({route}) => {
  // const {topic} = route.params;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [percent, setPercent] = useState(0);
  const data =[
      {
        key:'A'
      },
      {
        key:'B'
      },
      {
        key:'C'
      }
]
//   useEffect(() => {
//     fadeAnim.addListener(({value}) => {
//       setPercent(parseInt(value, 10));
//     });
//     Animated.timing(fadeAnim, {
//       toValue: 100,
//       duration: 60000,
//       useNativeDriver: true,
//     }).start();
//   }, []);

//event thong bao

  // useEffect(() => {
  //   if (percent==100){
  //       Alert.alert('time out')
  //   }
  // }, [percent])

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.title_question}>Question 1/10</Text>
          <View>
            <Text style={styles.numheart}>STOP</Text>
          </View>
        </View>
        <View style={styles.progessbar}>
          <Animated.View
            style={[
              styles.progess_inner,
              {
                width: `${percent}%`,
              },
            ]}
          />
          {/* <Animated.Text style={styles.progess_label}>{percent}%</Animated.Text> */}
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.question_container}>

        </View>
        
      </View>
      <View style={styles.option_container}>
      <FlatList
            data={data}
            renderItem={({item,index})=>{
                return(
                <View style={styles.option}>
                    <Text>{item.key}</Text>
                </View>
                )
            }}
            keyExtractor={(topic, index) => index.toString()}
          />
      </View>
      
     
    </View>
  );
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  header: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: 'green',
  },
  title_question: {
    color: '#ffffff',
    fontSize: 20,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  numheart: {
    color: '#ffffff',
    fontSize: 20,
  },
  progessbar: {
    height: 20,
    width: '100%',
    borderRadius: 20,
    borderColor: '#AAA',
    borderWidth: 3,
    marginTop: 18,
    justifyContent: 'center',
  },
  progess_inner: {
    width: '100%',
    backgroundColor: 'red',
    height: 14,
    borderRadius: 20,
  },
  progess_label: {
    fontSize: 15,
    color: '#ffffff',
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
  },
  content: {
    flex: 2,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  question_container: {
    height: 200,
    backgroundColor: '#A9F5F2',
    borderRadius: 20,
  },
  option_container:{
    flex:2.5,
    backgroundColor:'#ffffff',
    paddingHorizontal:40,
  },
  option: {
      height:70,
      width:'100%',
      justifyContent:'center',
      backgroundColor:'gray',
      borderRadius:20,
      paddingHorizontal:20,
      marginBottom:10,

  },
});
export default Main;
