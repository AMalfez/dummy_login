import { useState } from 'react'
import './App.css'
import Auth from './components/Auth'
import Home from './components/Home';

function App() {
  const [UserDetails, setUserDetails] = useState(undefined);
  return (
    <>
      {UserDetails==undefined ? (<Auth setUserDetails={setUserDetails}/>):(<Home/>)}
    </>
  )
}

export default App
