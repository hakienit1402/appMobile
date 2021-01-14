import React,{useContext, useState} from 'react'
import {View,Text,StyleSheet,StatusBar, ImageBackground,ScrollView,FlatList} from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import Language from '../components/Language';
import {AuthContext} from '../navigations/AuthProvider'
const Home = ({navigation}) => {
    const {user} = useContext(AuthContext)
    // console.log(user)
    const name = user.displayName
    const language = [{
        id:1,name:"JAVA",image:'https://www.tc-web.it/wp-content/uploads/2019/12/java.jpg'
    },
    {
        id:2,name:'C#',image:'https://pngimage.net/wp-content/uploads/2018/05/eps-to-png-7.png'
    },
    {
        id:3,name:'Java Script',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_WPyltbAoAxJQ1AJV_jVY4sIhsGQIBLO4Q&usqp=CAU'
    }
]
    return (
        <View style={styles.container}>
              <StatusBar barStyle="light-content" />
                <ImageBackground
               source={require('../src/assets/home.png')}
               style={{width:'100%',height:250}}
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
                <View>
                    <View style={{padding:20}}>
                        <Text style={{fontSize:22,fontWeight:'bold'}}>Choose language</Text>
                    </View>
                    <View style={styles.button}>
                        {language.map((item)=>(
                             <View style={styles.language} key={item.id}>
                            <Language item={item} />
                            </View>
                        ))}
                        
                    </View>
                </View>
        </View>
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
        height:250,
        backgroundColor:'#0080FF',
        opacity:0.3,
        borderBottomRightRadius:65
    },
    headerContainer:{
        paddingTop:130,
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
        height:80,
        width:"100%",
        alignItems:'center',
        borderRadius:10,
        elevation:20
    }
})
export default Home