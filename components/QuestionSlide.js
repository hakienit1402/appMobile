import React, { useContext } from 'react'
import { Dimensions, Text, View,StyleSheet, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { AppContext } from '../ContextAPI/AppContext'
const {width,height} = Dimensions.get('window')
const QuestionSlide = ({question,index,handleNextOrSubmit}) => {
    return (
        <View style={styles.container}>
        <View height={height*0.35} style={styles.questionContent}>
        <Text style={styles.questionText}>Question {index}:</Text>
        {question.type==='image' ? 
         <Image
         source={{uri: question.question}}
         style={styles.questionImage}
         resizeMode={'stretch'}
       />
        : 
        <Text style={styles.questionText}>{question.question}</Text>
        }
        </View>
        <View height={height*0.42} width={width}style={styles.answerContent}>
        
        </View>
        <View
          height={height * 0.13}
          width={width}
          backgroundColor={'#fff'}
          style={{alignItems: 'center',paddingTop:10}}>
          <LinearGradient colors={['#40FF00', '#39cff2']} style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>handleNextOrSubmit(index)}
             >
                 {index==10 ? 
                   <Text
                   style={{color: '#ffffff', fontSize: 19, fontWeight: 'bold'}}>
                   SUBMIT
                 </Text>
                 :
                 <Text
                 style={{color: '#ffffff', fontSize: 19, fontWeight: 'bold'}}>
                 NEXT
               </Text>
                 }
            
            </TouchableOpacity>
          </LinearGradient>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        width:width,
    },
    questionContent:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    questionText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#ffffff'
    },
    questionImage:{
        width:width*0.75,
        height:height*0.3
    },
    answerContent:{
        backgroundColor:'#ffffff',
        flexDirection:'column'
    },
    button: {
        width: width * 0.5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      },
})
export default QuestionSlide
