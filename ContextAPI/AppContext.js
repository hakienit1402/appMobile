// import React, { createContext, useContext, useEffect, useState } from "react";
// import firestore from '@react-native-firebase/firestore';
// import { AuthContext } from "../navigations/AuthProvider";
// export const AppContext = createContext();
// export const AppProvider = ({children}) =>{
//     const {userData} = useContext(AuthContext)
//     const [userPhotoUrl,setUserPhotoUrl] = useState('');
//     const [userDisplayName,setUserDisplayName] = useState(userData?userData.displayName:'');
    
    
    
//     return (
//         <AppContext.Provider
//         value={{
//             userDisplayName,setUserDisplayName,
//             userPhotoUrl,setUserPhotoUrl,

//         }}
//         >
//             {children}
//         </AppContext.Provider>
//     )
// }