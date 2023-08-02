import React from 'react'
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Invoices, Referrals, Loans, Profile, Settings, Summary } from '../MenubarPages';
import { Mainsection, MenuBar, DisplaySection, Anchar, PrimaryBtn } from '../../components/complete.style';
// import {  IconProp } from '@fortawesome/fontawesome-svg-core';
// import { FaBell } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Menubar() {
  const navigate = useNavigate();
  // const faBellIcon: IconProp = icon(FaBell);



  return (
    <>
    <Mainsection>
      <MenuBar>

        <PrimaryBtn>Refferal Code - 5AND1</PrimaryBtn> 

        <Anchar href="" onClick={() => navigate('/Summary')}>
            Summary
        </Anchar>
        <Anchar href="" onClick={() => navigate('/Referrals')}>
            Referrals
        </Anchar>
        <Anchar href="" onClick={() => navigate('/Loans')}>
            Loans
        </Anchar>
        <Anchar href="" onClick={() => navigate('/Invoices')}>
            Invoices
        </Anchar>
        <Anchar href="" onClick={() => navigate('/Profile')}>
            Profile
        </Anchar>
        <Anchar href="" onClick={() => navigate('/Settings')}>
            Settings
        </Anchar>

      </MenuBar>

      <DisplaySection>
        
          
          <Routes>
            <Route path='/Invoices' element={<Invoices />} />
            <Route path='/Referrals' element={<Referrals />} />
            <Route path='/Loans' element={<Loans />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Settings' element={<Settings />} />
            <Route path='/Summary' element={<Summary />} />
          </Routes>

        
      </DisplaySection>


    </Mainsection>
        



    </>
    
  )
}

export default Menubar