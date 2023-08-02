import React from 'react';
import Navbar from './pages/Navbar';
import Menubar from './pages/MenubarPages/Menubar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Invoices, Referrals, Loans, Profile, Settings, Summary } from './pages/MenubarPages';



function App() {
  return (
    <div>

      <Navbar />



      <Menubar />
      
      
     
    </div>
  );
}

export default App;
