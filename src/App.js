import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Mail } from '@mui/icons-material';
import EmailList from './EmailList';



function App() {
  return (
    <Router>
    <div className="app">
      <Header />

      <div className='app__body'>
       <Sidebar />
       
       <Routes>
        <Route path='/email' element={<Mail />} />
        <Route path='/' element={<EmailList />} />
      </Routes>
       </div>
      </div>
    </Router>
  );
}
export default App;
        
    
