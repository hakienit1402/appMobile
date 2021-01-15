import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Animated,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
const Main = ({route}) => {
  // const {topic} = route.params;
  const fadeAnim = useRef(new Animated.Value(100)).current;
  const [percent, setPercent] = useState(0);
  const [count,setCount]= useState(0)
  const [qsShow,setQsShow]= useState([])
  const question =[
    {
      key:'1'
    },
    {
      key:'2'
    },
    {
      key:'3'
    },
    {
      key:'4'
    },
    {
      key:'5'
    },
    {
      key:'6'
    },
    {
      key:'7'
    },
    {
      key:'8'
    },
    {
      key:'9'
    },
    {
      key:'10'
    }
  ]
  const data = [
    {
      key: 'A',
    },
    {
      key: 'B',
    },
    {
      key: 'C',
    },
    {
      key: 'D',
    },
  ];
  // useEffect(() => {
  //   fadeAnim.addListener(({value}) => {
  //     setPercent(parseInt(value, 10));
  //   });
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 5000,
  //     useNativeDriver: true,
  //   }).start();
  // }, []);
  const reloadProgess = () => {
    fadeAnim.setValue(100)
    setCount(Math.floor((Math.random() * 10)))
    fadeAnim.addListener(({value}) => {
      setPercent(parseInt(value, 10));
    });
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }
  const choose = (item) => {
    reloadProgess()
  }
  //event thong bao

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
      </View>
      <View style={styles.content}>
        <View style={[styles.question_container,{justifyContent:'center',alignItems:'center'
      }]}>
            
        <Text>{question[count].key}</Text>
        </View>
      </View>
      <View style={styles.option_container}>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={()=>choose(item)}>
                <View style={styles.option}>
                  <Text>{item.key}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
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
    justifyContent: 'center',
  },
  title_question: {
    color: '#ffffff',
    fontSize: 20,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numheart: {
    color: '#ffffff',
    fontSize: 20,
  },
  progessbar: {
    height: 2,
    width: '100%',
    justifyContent: 'center',
  },
  progess_inner: {
    width: '100%',
    backgroundColor: 'red',
    height: 2,
  },
  progess_label: {
    fontSize: 15,
    color: '#ffffff',
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
  },
  content: {
    flex: 3,
    width: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  question_container: {
    flex: 1,
    backgroundColor: '#A9F5F2',
    borderRadius: 20,
    marginBottom: 10,
  },
  option_container: {
    flex: 5,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  option: {
    height: 70,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
});
export default Main;
