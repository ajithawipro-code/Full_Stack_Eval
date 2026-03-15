import { AccountProvider } from "./context/AccountContext"
import { AuthProvider } from "./context/AuthContext"
import { AppRoutes } from "./AppRoutes"

function App(){


  return (

    <AuthProvider>
      <AccountProvider>
        <AppRoutes />     
      </AccountProvider>
    </AuthProvider>
  )
}

export default App;