import React, { createContext, useEffect, useState } from "react";
import firestore from '@react-native-firebase/firestore';
export const AppContext = createContext();
export const AppProvider = ({children}) =>{
    const [questions,setQuestions]= useState([]); 
    return (
        <AppContext.Provider
        value={{
            questions,
            setQuestions,
        }}
        >
            {children}
        </AppContext.Provider>
    )
}