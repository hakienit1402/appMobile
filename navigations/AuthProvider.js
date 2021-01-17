import auth from '@react-native-firebase/auth';
import React, {createContext, useState} from 'react';
//create authcontext
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [userData,setUserData] = useState([])
  const [error, setError] = useState('');
  const [loading,setLoading] = useState(false)
  const login = async (email, password) => {
   try { 
    await auth().signInWithEmailAndPassword(email, password)
     }catch (e) {
        setError(e.message)
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
        setUserData
      }}>
      {children}
    </AuthContext.Provider>
  );
};
