import { styled } from "styled-components";




// Main Navbar
export const NavbarMain = styled.nav `
    background-color:  #000431;
    padding: 0px 25px 0px 25px;
    color: white;
    border-bottom: 1px solid #27307c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;



// 50Fin logo in Navbar
export const Logo = styled.img `   
    cursor: pointer;
    width: 70px;
    height: 75px;
`;

export const NavContent = styled.div `
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding-right: 25px;
`;

export const NavIconImg = styled.svg `
    cursor: pointer;
    width: 18px;
    height: 18px;
    fill: rgb(38, 254, 238);  
`;








//Main section
export const Mainsection = styled.nav  `
    display: flex;
    
`;

// Side bar menu
export const MenuBar = styled.nav `
    background-color: #000431;
    padding: 30px 15px 15px 15px;
    color: white;
    height: 100vh;
    width: 12vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    
`;

// DisplaySection 
export const DisplaySection = styled.div `
    color: white;
    width: 88vw;
    padding: 25px 50px 0px 50px;
`;

export const PrimaryBtn = styled.button `
    width: 13vw;
    padding: 15px 5px 15px 5px;
    background-color: rgb(38, 254, 238);
    border-radius: 30px;
    border: none;
    color: black;
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    font-size: 13px;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    
`;

export const Anchar = styled.a `
    width: 12vw;
    font-size: 15px;
    padding: 13px 0px 13px 15px;
    background-color: none;
    display: flex;
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    text-decoration: none;
    color: white;
    gap: 10px;
  

    &:hover {
       background-color: #78b4b421;
       color: rgb(38, 254, 238);
       border-right: 2px solid rgb(38, 254, 238) ;
       
    }
`;

export const IconImg = styled.svg `
    width: 17px;
    height: 17px;
    fill: ${props => props.color || 'white'};
    cursor: pointer;

    &:hover {
        fill: black;
    }
`;




// Cards Components:

export const Div = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    padding: 45px 100px 25px 100px;
    
`;

export const PrimaryCard = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 20px 30px 20px 30px;
    justify-content: center;
    align-items: center;
    background-color: #141959;
    border-radius: 15px;
    gap: 15px;
`;

export const SecondaryCard = styled.div `
    width: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px 20px 10px 20px;
    justify-content: center;
    align-items: center;
    background-color: #000647;
    border-radius: 15px;
    gap: 15px;

`;

export const Textcard = styled.div `
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    color: white;
    font-size: 19px;
    padding: 5px;
    font-weight: 500;
`;

export const ImgTextCard = styled.div `
    display: flex;
    padding: 8px;
    flex-direction: column;
    width: 150px;
    

    &:hover {
        border:  1px solid aqua;
         border-radius: 5px;
    }
`;



//Paragraph Components

export const Para14 = styled.p`
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    font-size: 14px;
    text-align: center;
`;

export const Para12 = styled.p `
     font-family: "Inter-SemiBold", "Inter", sans-serif;
    font-size: 12px;
    text-align: center;
`;

//Refferal Code Box
export const StaticInput = styled.div `
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    padding: 10px;
    background-color: #192138b9;
    color:white;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    border-radius: 5px;
    border: 1px solid #275595;

` ;







