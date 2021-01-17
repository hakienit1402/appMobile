import firestore from '@react-native-firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Language from '../components/Language';
import { AuthContext } from '../navigations/AuthProvider';
const {width,height} = Dimensions.get('window')
const Home = ({navigation}) => {
    const {user,userData} = useContext(AuthContext)
    // console.log(user)
    const name = userData.displayName
    const [languages,setLanguages] = useState([]);
    useEffect(() => {
        firestore().collection('languages').onSnapshot((data)=> { 
            setLanguages(data.docs.map(doc => ({
              ...doc.data(),
            })))
          })
    }, [])
    
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
              <StatusBar barStyle="light-content" />
                <ImageBackground
               source={require('../src/assets/home.png')}
               style={{width:'100%',height:height*0.35}}
               imageStyle={{borderBottomRightRadius:60}}
               resizeMode={'stretch'}
                >
                    <View style={styles.headerOverLay}></View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.name}>Hi {name}</Text>
                        <Text style={styles.title}>What language would you like to practice? </Text>
                    </View>
                    <Feather name="menu" size={30} color="#ffffff" style={styles.menuIcon} onPress={()=>navigation.toggleDrawer()}/>
                    {/* <Feather name="settings" size={30} color="#ffffff" style={styles.settingIcon} /> */}
                </ImageBackground>
                <View height={height*0.65} style={{flexDirection:'column'}}>
                    <View style={{padding:20}}>
                        <Text style={{fontSize:22,fontWeight:'bold'}}>Choose language</Text>
                    </View>
                    <View style={styles.button}>
                        {languages.map((item,index)=>(
                             <View style={styles.language} key={index}>
                            <Language item={item} />
                            </View>
                        ))}
                        
                    </View>
                </View>
        </ScrollView>
    )
}
var styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'#CEF6F5'
        backgroundColor:'#FFFFFF'
    },
    headerOverLay:{
        position:'absolute',
        top:0,
        right:0,
        left:0,
        height:height*0.35,
        backgroundColor:'#0080FF',
        opacity:0.3,
        borderBottomRightRadius:60
    },
    headerContainer:{
        paddingTop:height*0.2,
        paddingLeft:20,
    },
    name:{
        fontWeight:'bold',
        fontSize:38,
        color:'#FFFFFF'
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'#ffffff'
    },
    headerDescription:{
        backgroundColor:'#ffffff',
        height:50, 
        marginTop:10,
        width:'90%',
        borderBottomRightRadius:50,
        borderTopRightRadius:50,
        justifyContent:'center'
    },
    menuIcon:{
        position:'absolute',
        top:20,
        left:20,
        
    },
    settingIcon:{
        position:'absolute',
        top:20,
        right:20,
    },
    button:{
        alignItems:'center',
        paddingHorizontal:30,
    },
    language:{
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        marginBottom:20,
        height:height*0.13,
        width:"100%",
        alignItems:'center',
        borderRadius:10,
        elevation:20
    }
})
export default Home