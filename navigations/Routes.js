import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from './AuthProvider';
import firestore from '@react-native-firebase/firestore';
import {AppProvider} from '../ContextAPI/AppContext';

const Routes = () => {
  const {user, setUser,setUserData} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
    if (user === null) {
      setUserData([]);
    } else {
      firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot((documentSnapshot) => {
          if (documentSnapshot.exists) {
            setUserData(documentSnapshot.data());
          } else {
            const tmpdata = {
              uid:user.uid,
              email: user.email,
              displayName: 'New member',
              photoUrl:
                'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
              stateExam: false,
              stateLogin: true,
            }
            firestore()
              .collection('users')
              .doc(user.uid)
              .set({
                uid:user.uid,
                email: user.email,
                displayName: 'New member',
                photoUrl:
                'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
                stateExam: false,
                stateLogin: true,
              })
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
      {user ? (
        <AppProvider>
          <AppStack />
        </AppProvider>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
