import React from 'react'
import RootApplication from './Containers/RootApplication';
import Services from './Services/global.services'


///////////////////// Context /////////////////////////////
const GlobalService = new Services()
export const GlobalServiceContext = React.createContext()


////////////////// Main App /////////////////////////////
const AppWithContext = () => {
  return (
    <GlobalServiceContext.Provider value={GlobalService}>
      <RootApplication/>
    </GlobalServiceContext.Provider>
  )
}

export default AppWithContext
