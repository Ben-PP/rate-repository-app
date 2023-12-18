import { createContext } from 'react'

const AuthStorageContext = createContext()

export const AuthStorageProvider = ({ children, value }) => (
  <AuthStorageContext.Provider value={value}>
    {children}
  </AuthStorageContext.Provider>
)

export default AuthStorageContext
