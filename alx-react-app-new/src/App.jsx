import ProfilePage from './components/ProfilePage'
import UserContext from './components/UserContext'

function App() {
  const userData = { name: "Jane Doe", email: "Jane.doe@example.com"};

  return(
    <UserContext.Provider value={userData}>
     <ProfilePage />
     </UserContext.Provider>
  )
}

export default App;