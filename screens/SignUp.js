import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);
  const [checked, setChecked] = useState(false);
  const handleChangeEmail = (text) => {
    setEmail(text);
    if (text.length !== 0) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
  };
  const handleChangePassword = (text) => {
    setPassword(text);
  };
  const handleChangePasswordConfirm = (text) => {
    setPasswordConfirm(text);
  };
  const handleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const handleSecureTextEntryConfirm = () => {
    setSecureTextEntryConfirm(!secureTextEntryConfirm);
  };
 const handleSignUp = ()=>{
    console.log(email+ " - " + password)
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.title_header}>Welcome Coder !</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <ScrollView>
          <Text style={styles.title_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              size={20}
              color="#0B610B"
              style={styles.icon}
            />
            <TextInput
              placeholder="Your email..."
              style={styles.text_input}
              value={email}
              onChangeText={(text) => handleChangeEmail(text)}
            />
            {checkEmail === true ? (
              <Feather
                name="check-circle"
                size={20}
                color="green"
                style={styles.icon}
              />
            ) : null}
          </View>
          <Text style={styles.title_footer}>Password</Text>
          <View style={styles.action}>
            <Feather
              name="lock"
              size={20}
              color="#0B610B"
              style={styles.icon}
            />
            {secureTextEntry ? (
              <TextInput
                placeholder="Your password..."
                secureTextEntry={true}
                value={password}
                style={styles.text_input}
                onChangeText={(text) => handleChangePassword(text)}
              />
            ) : (
              <TextInput
                placeholder="Your password..."
                value={password}
                style={styles.text_input}
                onChangeText={(text) => handleChangePassword(text)}
              />
            )}
            <TouchableOpacity onPress={() => handleSecureTextEntry()}>
              {secureTextEntry ? (
                <Feather
                  name="eye-off"
                  size={20}
                  color="gray"
                  style={styles.icon}
                />
              ) : (
                <Feather
                  name="eye"
                  size={20}
                  color="gray"
                  style={styles.icon}
                />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.title_footer}>Confirm Password</Text>
          <View style={styles.action}>
            <Feather
              name="lock"
              size={20}
              color="#0B610B"
              style={styles.icon}
            />
            {secureTextEntryConfirm ? (
              <TextInput
                placeholder="Your password confirm..."
                secureTextEntry={true}
                value={passwordConfirm}
                style={styles.text_input}
                onChangeText={(text) => handleChangePasswordConfirm(text)}
              />
            ) : (
              <TextInput
                placeholder="Your password confirm..."
                value={password}
                style={styles.text_input}
                onChangeText={(text) => handleChangePasswordConfirm(text)}
              />
            )}
            <TouchableOpacity onPress={() => handleSecureTextEntryConfirm()}>
              {secureTextEntryConfirm ? (
                <Feather
                  name="eye-off"
                  size={20}
                  color="gray"
                  style={styles.icon}
                />
              ) : (
                <Feather
                  name="eye"
                  size={20}
                  color="gray"
                  style={styles.icon}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.text_private}>
            <Text>By signing up you agree to our</Text>
            <Text> Terms of Services</Text>
            <Text> and</Text>
            <Text>Privace Police</Text>
          </View>
          <TouchableOpacity onPress={() => handleSignUp()}>
            <View style={styles.button}>
              <LinearGradient
                colors={['#40FF00', '#39cff2']}
                style={styles.signIn}>
                <Text style={[styles.textSign, {color: '#ffffff'}]}>
                  Sign Up
                </Text>
              </LinearGradient>
              <Text
                style={{color: 'blue', marginVertical: 15}}
                onPress={() => navigation.navigate('SignInScreen')}>
                Go Back
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B610B',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  footer: {
    flex: 6,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  title_header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  title_footer: {
    color: '#0B610B',
    fontSize: 18,
    paddingTop: 10,
  },
  action: {
    flexDirection: 'row',
    // marginTop:10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  text_input: {
    flex: 1,
    paddingLeft: 10,
    color: '#0B610B',
  },
  icon: {
    paddingTop: 15,
  },
  text_forgot: {
    color: '#0B610B',
    marginTop: 15,
  },
  button: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text_private: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
});
export default SignUp;
