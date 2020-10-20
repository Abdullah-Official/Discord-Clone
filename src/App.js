import React, { useEffect } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar'
import {login, logout, selectUser} from './features/userSlice'
import { createSelector } from '@reduxjs/toolkit';
import Login from './Login'
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)


useEffect(() => {

  auth.onAuthStateChanged((authUser) =>{
    console.log('user is', authUser)
    if(authUser){
      dispatch(login({
        uid : authUser.uid,
        photo : authUser.photoURL,
        email : authUser.email,
        displayName : authUser.displayName,
      }))
      // User LoggedIn ..
    }else{
      // user is logged out ..
      dispatch(logout())
    }

  })
}, [dispatchEvent])

  return (
    <div className="app">
    {user ? (<>
    
      <Sidebar />
        <Chat /> 
        
        
    </>):(
        <> 
        <Login/>
        </>
    )}  

  
    </div>
  );
}

export default App;
