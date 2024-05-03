import React, { useState } from 'react'
import '../css/Auth.css'
import Login from './Login'
import Signup from './Signup'
function Auth({setUserDetails}) {
    const [LoginPage,setLoginPage] = useState(true)
  return (
    <div className='auth__container'>
        {LoginPage?(<Login setLoginPage={setLoginPage} setUserDetails={setUserDetails}/>):(<Signup setUserDetails={setUserDetails} setLoginPage={setLoginPage}/>)}
    </div>
  )
}

export default Auth