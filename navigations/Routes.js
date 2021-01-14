import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {AuthContext} from './AuthProvider';
import firestore from '@react-native-firebase/firestore';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  console.log(user);
  const [initializing, setInitializing] = useState(true);
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (user === null) {
      setUser(null);
    } else {
      firestore()
        .collection('users')
        .doc(user.uid)
        .onSnapshot((documentSnapshot) => {
          console.log('User exists: ', documentSnapshot.exists);
          if (documentSnapshot.exists) {
            console.log('User data: ', documentSnapshot.data());
            setUser(documentSnapshot.data());
          } else {
            const dataUser = [
              {
                displayName: 'New member',
                photoUrl:
                  'https://lh3.googleusercontent.com/proxy/r66C8cR3ZcLhfxiYy5TPK4zSZh5oe2gm622RQFqd4E2zPqce7joNSzJ4DyozALK0r9VxS84m8fxWq0CrQmfaVQV2h2kYsjuEmCcXDbLTJG6HtlAmTAhbRjdqWE09b4Eqna85EGl3JGs5SAiQ',
                uid: user.uid,
                stateExam: false,
                stateLogin: true,
              },
            ];
            firestore()
              .collection('users')
              .doc(user.uid)
              .set({
                email: user.email,
                displayName: 'New member',
                photoUrl:
                  'https://lh3.googleusercontent.com/proxy/r66C8cR3ZcLhfxiYy5TPK4zSZh5oe2gm622RQFqd4E2zPqce7joNSzJ4DyozALK0r9VxS84m8fxWq0CrQmfaVQV2h2kYsjuEmCcXDbLTJG6HtlAmTAhbRjdqWE09b4Eqna85EGl3JGs5SAiQ',
                stateExam: false,
                stateLogin: true,
              })
              .then(() => {
                console.log('User added!');
              });
            setUser(dataUser);
          }
        });
    }
    if (initializing) setInitializing(false);
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
