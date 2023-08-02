import React from 'react'
import { IconImg, Div, PrimaryBtn, PrimaryCard, SecondaryCard, Textcard, Para12, Para14, StaticInput, ImgTextCard } from '../../../components/complete.style';
import { Clone, Whatsapp, Share } from '../../../asserts/svgs';
import { Client, Money, Network } from '../../../asserts/pngs';




function Referrals() {
  return (
    <>
      <div style={{ fontFamily: "Inter-SemiBold, Inter, sans-serif", fontSize: "15px" }}>
        ←&nbsp; &nbsp; Refer and Earn
      </div>

      <Div>
        <PrimaryCard>
          <Textcard>Refer and Earn</Textcard>
            <Para14>Help your client avail loan against there mutual funds at <br /> 1% per month</Para14>
            <div style={{display:"flex", alignItems:"center", padding:"5px", gap:"20px"}}>
              <Para12>Your Referal Code</Para12>
              <StaticInput> 5AND1 <IconImg> <Clone /> </IconImg> </StaticInput>
            </div>
            <div style={{display:"flex", alignItems:"center", padding:"5px", gap:"20px"}}>
              <PrimaryBtn>Share on whatsapp &nbsp; &nbsp; <IconImg color='black'> <Whatsapp /> </IconImg></PrimaryBtn>
              <IconImg color='rgb(38, 254, 238)'><Share /></IconImg>
            </div>
        </PrimaryCard>

        <SecondaryCard>
          <Textcard>How to refer and earn</Textcard>
          <div style={{display:"flex", gap:"25px"}}>
            <ImgTextCard>
              <img src={Client} alt="" />
              <Para12>share your unique referral code/link with your clients & MFD's</Para12>
            </ImgTextCard>
            <ImgTextCard>
              <img  src={Money} alt="" style={{width:"150px", height:"110px"}} />
              <Para12>share your unique referral code/link with your clients & MFD's</Para12>
            </ImgTextCard>
            <ImgTextCard>
              <img src={Network} alt="" />
              <Para12>share your unique referral code/link with your clients & MFD's</Para12>
            </ImgTextCard>

          </div>

        </SecondaryCard>



      </Div>
    </>
  )
}

export default Referrals