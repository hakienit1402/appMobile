import React, { useEffect, useRef, useState } from 'react'
import {View,Animated,StyleSheet, Alert} from 'react-native'

const Process = ({isStart,setEndProcess}) => {
    const fadeAnim = useRef(new Animated.Value(100)).current;
    const [percent, setPercent] = useState(100);
    useEffect(() => {
    if (isStart){
      fadeAnim.addListener(({value}) => {
       
        setPercent(parseInt(value, 10));
      });
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300000,
        useNativeDriver: true
      }).start(({ finished }) => {
        setEndProcess()
      });
    }
   
  }, [])
   
    return (
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
    )
}
const styles = StyleSheet.create({
    progessbar: {
        height: 8,
        width: '100%',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 3,
        borderRadius: 40,
        borderColor: 'green',
        borderWidth: 1,
      },
      progess_inner: {
        backgroundColor: 'red',
        height: 8,
        borderRadius: 40,
      },
})
export default Process
