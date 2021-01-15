import React, {Fragment, useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import QuestionSlide from '../components/QuestionSlide';
import Start from '../components/Start';
import * as Animatable from 'react-native-animatable';
import firestore from '@react-native-firebase/firestore';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

const AppPro = ({route}) => {
  const [percent, setPercent] = useState(100);
  const {language, topic, logo} = route.params;
  const [visible, setVisible] = useState(true);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    firestore()
      .collection('questions')
      .where('language', '==', language)
      .where('topic', '==', topic)
      .onSnapshot((data) => {
        setQuestions(
          data.docs.map((doc) => ({
            ...doc.data(),
          })),
        );
      });
  }, []);
  const handleStart = () => {
    setVisible(false);
    console.log(questions);
  };
  const scroll = useRef(null);
  const handleNextOrSubmit = (index) =>{
    if (index===10) {
        console.log('finish')
    } else {
        console.log('next')
    }
  }
  return (
    <SafeAreaView flex={1}>
      <StatusBar barStyle="light-content" />
      <Animatable.View animation="bounceIn">
        <Start
          logo={logo}
          language={language}
          handleStart={handleStart}
          visible={visible}
        />
      </Animatable.View>
      <View style={styles.container}>
        <View
          height={height * 0.1}
          backgroundColor={'white'}
          style={styles.header}>
          <View
            style={{
              marginLeft: 20,
              marginRight: 30,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
            flex={1}>
            <Feather
              name="arrow-left"
              size={35}
              color={'green'}
              style={{position: 'absolute', left: 0}}
            />
            <Text style={styles.title}>{language}</Text>
            <Text style={styles.titleTopic}>Đề {topic}</Text>
          </View>
          <View style={{marginLeft: 40, marginRight: 40}}>
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
          </View>
        </View>
        <View height={height * 0.9}>
          <ScrollView
            ref={scroll}
            showsVerticalScrollIndicator={false}
            horizontal
            snapToInterval={width}
            decelerationRate="fast"
            scrollEventThrottle={16}
            bounces={false}>
            {questions.map((question, index) => (
              <Fragment key={index} >
                <QuestionSlide question={question} index={index + 1} handleNextOrSubmit={handleNextOrSubmit}/>
              </Fragment>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
const {width, height} = Dimensions.get('window');
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  header: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  titleTopic: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 10,
  },

  progessbar: {
    height: 8,
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 3,
    borderRadius: 40,
  },
  progess_inner: {
    backgroundColor: 'red',
    height: 8,
    borderRadius: 40,
  },
  button: {
    width: width * 0.5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
export default AppPro;
