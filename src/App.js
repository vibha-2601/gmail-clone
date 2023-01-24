import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EmailList from './EmailList';
import Mail from './Mail';
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';



function App() {
const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

const user = useSelector(selectUser);
const dispatch = useDispatch();

 useEffect(() => {
 auth.onAuthStateChanged((user) => {
  if (user) {
    // user logged in
    dispatch(
      login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,     
      })
    )
  }
 })
},[])

 return (
    <Router>
      {!user ? (
        <Login />
      ) : (<div className="app">
      <Header />

      <div className='app__body'>
       <Sidebar />
       
       <Routes>
        <Route path='/email' element={<Mail />} />
        <Route path='/' element={<EmailList />} />
      </Routes>
       </div>

       {sendMessageIsOpen && <SendMail />}
      </div>)}
    
    </Router>
  );
}
export default App;
        
    
