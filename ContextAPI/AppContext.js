import React, { createContext, useContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from "../navigations/AuthProvider";
export const AppContext = createContext();
export const AppProvider = ({children}) =>{
    // const {user} =  useContext(AuthContext)
    // const [questions,setQuestions]= useState([]); 
    // const [userData,setUserData]=useState([])

    // useEffect(() => {
    //    firestore().collection('users').doc(user.uid).onSnapshot((data)=> { 
    //     setUserData(data.docs.map(doc => ({
    //       ...doc.data(),
    //     })))
    //   })
    // }, [user])
    return (
        <AppContext.Provider
        value={{
            // userData
        }}
        >
            {children}
        </AppContext.Provider>
    )
}