import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Modal,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');
const End = ({logo, handleView, visible, score,addHistory}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.logo}>
            <Image
              source={{uri: logo}}
              style={styles.logoImage}
              resizeMode={'stretch'}
            />
          </View>
          <View style={styles.contentText}>
            {score < 5 ? (
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'red',
                  marginBottom: height * 0.04,
                }}>
                Failed
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'green',
                  marginBottom: height * 0.04,
                }}>
                Congratulations
              </Text>
            )}
            <Text style={styles.text}>{score}/10</Text>
            {score < 5 ? (
              <Text style={styles.text}>Thanks you for your effort!</Text>
            ) : (
              <Text style={styles.text}>Your quiz completed successfully!</Text>
            )}

            <Text style={styles.text}>Press View to see answers</Text>
            <LinearGradient
              colors={['#40FF00', '#39cff2']}
              style={styles.button}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleView()}>
                <Text
                  style={{color: '#ffffff', fontSize: 19, fontWeight: 'bold'}}>
                  VIEW
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#40FF00', '#39cff2']}
              style={styles.button}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => addHistory(score)}>
                <Text
                  style={{color: '#ffffff', fontSize: 19, fontWeight: 'bold'}}>
                  SAVE
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            
          </View>
        </View>
      </View>
    </Modal>
  );
};
var styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000aa',
    flex: 1,
    marginTop: height * 0.1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
    height: height * 0.5,
    marginVertical: height * 0.2,
    marginHorizontal: width * 0.1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: {
    position: 'absolute',
    height: height * 0.6 * 0.3,
    width: height * 0.6 * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    top: -height * 0.1,
  },
  logoImage: {
    height: height * 0.6 * 0.3,
    width: height * 0.6 * 0.3,
    borderRadius: 360,
  },
  contentText: {
    flex: 1,
    flexDirection: 'column',
    marginTop: height * 0.05,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 13,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
export default End;
