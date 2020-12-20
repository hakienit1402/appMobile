import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    TouchableOpacity
  } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';
 const Splash = (props) => {
    return (
        <View style={styles.container}>
           <StatusBar barStyle='light-content'/>
           <View style={styles.header}>
                <Animatable.Image
                animation="bounceIn"
                source={require('../src/assets/logo.png')}
                style={styles.logo}
                resizeMode={'stretch'}
                />
           </View>
           <Animatable.View style={styles.footer}
            animation="fadeInUpBig"
           >
                <Text style={styles.title}>Welcome to my app!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity 
                    onPress={()=>props.navigation.navigate("SignInScreen")}
                    >
                    <LinearGradient
                    colors={['#40FF00','#39cff2']}
                    style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Get started!</Text>
                        
                    </LinearGradient>
                    </TouchableOpacity>
                   
                </View>
           </Animatable.View>
        </View>
    )
}
const {height} = Dimensions.get("screen")
const height_logo=height*0.7*0.4

const styles = StyleSheet.create({
  container:{
        flex:1,
        backgroundColor:'#00FF00'
  },
  header:{
      flex:2,
      justifyContent:'center',
      alignItems:'center'
  },
  footer:{
      flex:1,
      backgroundColor:'#FFFFFF',
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
      paddingVertical:50,
      paddingHorizontal:50
  },
  logo:{
    width:height_logo,
    height:height_logo,
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:'#04B404'
  },
  text:{
      color: 'gray',
      marginTop:5
  },
  button:{
      alignItems:'flex-end',
      marginTop:30
  },
  signIn:{
      width:150,
      height:40,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      flexDirection:'row'
  },
  textSign:{
      color:'#FFFFFF',
      fontWeight:'bold'
  }
});
export default Splash
