import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import { auth } from './firebase';

function App() {
  // selectUser - imported from userSlice.js (redux file)
  const user = useSelector(selectUser);
  // const user = 'Oksana';
  const dispatch = useDispatch();

  // useEffect - when the app loads we use this effect
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL:userAuth.photoURL,
        }))
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Header/>

      {!user ? (
        <Login />
      ): (
        <div className='app_body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )} 
    </div>
  );
}

export default App;
