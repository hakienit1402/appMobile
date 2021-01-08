

import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper';
import Providers from './navigations';
const App = () => {
  return (
   <PaperProvider>
     <Providers/>
   </PaperProvider>
  )
}

export default App
