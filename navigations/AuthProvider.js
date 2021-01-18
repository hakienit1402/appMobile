import auth from '@react-native-firebase/auth';
import React, { createContext, useState } from 'react';
//create authcontext
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const login = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      setError(e.message);
    }
  };
  const register = async (email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  };
  const logout = async () => {
    try {
      await auth().signOut();
    } catch (e) {
      console.log(e);
    }
  };
  const updateStateLogOut = (uid) => {
    firestore()
    .collection('users')
    .doc(uid)
    .update({
      stateLogin:false
    })
  }
  const updateStateLogIn = (uid) => {
    firestore()
    .collection('users')
    .doc(uid)
    .update({
      stateLogin:true
    })
  }
  const updateStateExamTrue = (uid) =>{
    firestore()
    .collection('users')
    .doc(uid)
    .update({
      stateExam:true
    })
  }
  const updateStateExamFalse = (uid) =>{
    firestore()
    .collection('users')
    .doc(uid)
    .update({
      stateExam:false
    })
  }
  const upda
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        setError,
        login,
        register,
        logout,
        userData,
        setUserData,
        updateStateLogIn,
        updateStateLogOut,
        updateStateExamTrue,
        updateStateExamFalse
      }}>
      {children}
    </AuthContext.Provider>
  );
};
