import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
const Info = () => {
    return (
        <View style={styles.container}>
            <Text>Info</Text>
        </View>
    )
}
var styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Info