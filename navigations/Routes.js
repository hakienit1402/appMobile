import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import AppStack from './AppStack';
import { AuthContext } from './AuthProvider';
import AuthStack from './AuthStack';

const Routes = () => {
  const {user, setUser, setUserData,updateStateLogIn} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
    if (user === null) {
      setUserData([]);
    } else {
      updateStateLogIn(user.uid)
      firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot((documentSnapshot) => {
          if (documentSnapshot.exists) {
            setUserData(documentSnapshot.data());
          } else {
            const tmpdata = {
              uid: user.uid,
              email: user.email,
              displayName: 'New member',
              photoUrl:
                'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
              stateExam: false,
              stateLogin: true,
            };
            firestore().collection('users').doc(user.uid).set({
              uid: user.uid,
              email: user.email,
              displayName: 'New member',
              photoUrl:
                'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
              stateExam: false,
              stateLogin: true,
            });
            setUserData(tmpdata);
            
          }
        });
    }
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
