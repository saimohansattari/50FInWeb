import {  Link } from "react-router-dom";
import { Layer, User, Rupee, Moneybill, Address, Gear } from '../../asserts/svgs';
import { Mainsection, MenuBar, DisplaySection, PrimaryBtn,Anchar, IconImg } from '../../components/complete.style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Invoices, Referrals, Loans, Profile, Settings, Summary } from '../../pages/MenubarPages';



function Menubar() {



  return (
    <BrowserRouter>
      <Mainsection>
        <MenuBar>

          <PrimaryBtn>Refferal Code - 5AND1</PrimaryBtn> 

          <Link style={{textDecoration:"none"}}  to="/Summary">
            <Anchar>
              <IconImg><Layer /></IconImg>  
              Summary
            </Anchar>
          </Link>


          <Link style={{textDecoration:"none"}} to="/Referrals">
            <Anchar>
              <IconImg><User /></IconImg>
              Refferals
            </Anchar>
          </Link>


          <Link style={{textDecoration:"none"}} to="/Loans">
            <Anchar>
              <IconImg><Rupee /></IconImg>  
              Loans
            </Anchar>
          </Link>


          <Link style={{textDecoration:"none"}} to="/Invoices">
            <Anchar>
              <IconImg><Moneybill /></IconImg>
              Invoices
            </Anchar>
          </Link>


          <Link style={{textDecoration:"none"}} to="/Profile">
            <Anchar>
              <IconImg><Address /></IconImg>
              Profile
            </Anchar>
          </Link>


          <Link style={{textDecoration:"none"}} to="/Settings">
            <Anchar>
              <IconImg><Gear /></IconImg>
              Settings
            </Anchar>
          </Link>

        </MenuBar>
        

        <DisplaySection>

          <Routes>
            <Route  path="/Summary" element={<Summary />} />
            <Route  path="/Referrals" element={<Referrals />} />
            <Route  path="/Loans" element={<Loans />} />
            <Route  path="/Invoices" element={<Invoices />} />
            <Route  path="/Profile" element={<Profile />} />
            <Route  path="/Settings" element={<Settings />} />
          </Routes>

        </DisplaySection>



      


      </Mainsection>
 
    </BrowserRouter>
    
  )
}

export default Menubar