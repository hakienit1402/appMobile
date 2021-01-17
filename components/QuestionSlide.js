import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
const {width, height} = Dimensions.get('screen');
const QuestionSlide = ({question, index, handleNext,handleSubmit, onSelected,end}) => {
  const [checkA, setCheckA] = useState(false);
  const [checkB, setCheckB] = useState(false);
  const [checkC, setCheckC] = useState(false);
  const [checkD, setCheckD] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [iscorrectA, setIsCorrectA] = useState(false);
  const [iscorrectB, setIsCorrectB] = useState(false);
  const [iscorrectC, setIsCorrectC] = useState(false);
  const [iscorrectD, setIsCorrectD] = useState(false);
  useEffect(() => {
    if(end){
      handleFinish()
    }
  }, [end])
  const handleFinish = () => {
    setIsFinish(true)
    if (question.optionA===question.answerOne||question.optionA===question.answerTwo){
      setIsCorrectA(true)
    }
    if (question.optionB===question.answerOne||question.optionB===question.answerTwo){
      setIsCorrectB(true)
    } 
    if (question.optionC===question.answerOne||question.optionC===question.answerTwo){
      setIsCorrectC(true)
    }
    if (question.optionD===question.answerOne||question.optionD===question.answerTwo){
      setIsCorrectD(true)
    } 
  };
  const handleClickButton = (index)=>{
    if (index===10){
      handleSubmit()
    } else handleNext(index)
    
  }
  const handleSelect = (index, option) => {
    onSelected(index, option);
    if (option === question.optionA) {
      setCheckA(!checkA);
      
    } else if (option === question.optionB) {
      setCheckB(!checkB); 

    } else if (option === question.optionC) {
      setCheckC(!checkC); 
      // setCheckB(false)
      // setCheckA(false)
      // setCheckD(false)
      // onSelected(index, option);
    } else if (option === question.optionD) {
      setCheckD(!checkD); 

    }
   
  };
  return (
    <View style={styles.container}>
      <View height={height * 0.35} style={styles.questionContent}>
        <Text style={styles.questionCount}>Question {index}:</Text>
      
        {question.type === 'image' ? (
          <Image
            source={{uri: question.question}}
            style={styles.questionImage}
            resizeMode={'stretch'}
          />
        ) : (
          <Text style={styles.questionText}>{question.question}</Text>
        )}
      </View>
      <View height={height * 0.42} width={width} style={styles.answerContent}>
        <TouchableOpacity
          disabled={end}
          style={[
            styles.buttonAnswer,
            !isFinish
              ? {
                  backgroundColor: checkA ? 'blue' : '#ffffff',
                }
              : {
                  backgroundColor: iscorrectA ? 'green' : 'red',
                },
          ]}
          onPress={() => handleSelect(index, question.optionA)}>
          {end && checkA && iscorrectA ? 
          <Icon name='check-circle' size={25} color={'#ffffff'} style={styles.icon}/>
          :
          end && checkA ? 
          <Icon name='frown' size={25} color={'#ffffff'} style={styles.icon}/> 
          : end && iscorrectA ?  <Icon name='frown' size={25} color={'red'} style={styles.icon}/> :null
        }
         
          <Text>{question.optionA}</Text>
        </TouchableOpacity>
        <TouchableOpacity
         disabled={end}
              style={[
                styles.buttonAnswer,
                !isFinish
                  ? {
                      backgroundColor: checkB ? 'blue' : '#ffffff',
                    }
                  : {
                      backgroundColor: iscorrectB ? 'green' : 'red',
                    },
              ]}
          onPress={() => handleSelect(index, question.optionB)}>
              {end && checkB && iscorrectB ? 
          <Icon name='check-circle' size={25} color={'#ffffff'} style={styles.icon}/>
          :
          end && checkB ? 
          <Icon name='frown' size={25} color={'#ffffff'} style={styles.icon}/> 
          : end && iscorrectB ?  <Icon name='frown' size={25} color={'red'} style={styles.icon}/> :null
        }
          <Text>{question.optionB}</Text>
        </TouchableOpacity>
        <TouchableOpacity
         disabled={end}
             style={[
              styles.buttonAnswer,
              !isFinish
                ? {
                    backgroundColor: checkC ? 'blue' : '#ffffff',
                  }
                : {
                    backgroundColor: iscorrectC ? 'green' : 'red',
                  },
            ]}
          onPress={() => handleSelect(index, question.optionC)}>
              {end && checkC && iscorrectC ? 
          <Icon name='check-circle' size={25} color={'#ffffff'} style={styles.icon}/>
          :
          end && checkC ? 
          <Icon name='frown' size={25} color={'#ffffff'} style={styles.icon}/> 
          : end && iscorrectC ?  <Icon name='frown' size={25} color={'red'} style={styles.icon}/> :null
        }
          <Text>{question.optionC}</Text>
          
        </TouchableOpacity>
        <TouchableOpacity
         disabled={end}
            style={[
              styles.buttonAnswer,
              !isFinish
                ? {
                    backgroundColor: checkD ? 'blue' : '#ffffff',
                  }
                : {
                    backgroundColor: iscorrectD ? 'green' : 'red',
                  },
            ]}
          onPress={() => handleSelect(index, question.optionD)}>
              {end && checkD && iscorrectD ? 
          <Icon name='check-circle' size={25} color={'#ffffff'} style={styles.icon}/>
          :
          end && checkD ? 
          <Icon name='frown' size={25} color={'#ffffff'} style={styles.icon}/> 
          : end && iscorrectD ?  <Icon name='frown' size={25} color={'red'} style={styles.icon}/> :null
        }
          <Text>{question.optionD}</Text>
        </TouchableOpacity>
      </View>
      <View
        height={height * 0.13}
        width={width}
        backgroundColor={'#fff'}
        style={{alignItems: 'center', paddingTop: 10}}>
        <LinearGradient colors={['#40FF00', '#39cff2']} style={styles.button}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
             handleClickButton(index)
            }>
            {index == 10 ? (
              <Text
                style={{color: '#ffffff', fontSize: 19, fontWeight: 'bold'}}>
                SUBMIT
              </Text>
            ) : (
              <Text
                style={{color: '#ffffff', fontSize: 19, fontWeight: 'bold'}}>
                NEXT
              </Text>
            )}
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: width,
  },
  questionContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  questionCount:{
    position:'absolute',
    top:5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  questionImage: {
    width: width * 0.75,
    height: height * 0.3,
    marginTop:height*0.03
  },
  answerContent: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: width * 0.5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonAnswer: {
    width: width * 0.8,
    height: height * 0.09,
    marginBottom: 7,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 5,
  },
  icon:{
    position:'absolute',
    right:5,
  }
});
export default QuestionSlide;
