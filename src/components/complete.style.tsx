import { styled } from "styled-components";




// Main Navbar
export const NavbarMain = styled.nav `
    background-color:  rgb(20, 26, 74);
    padding: 10px 25px 10px 25px;
    color: white;
    border-bottom: 1px solid #27307c;
    
`;



// 50Fin logo in Navbar
export const Logo = styled.img `   
    cursor: pointer;
    width: 70px;
    height: 75px;
`;


//Main section
export const Mainsection = styled.nav  `
    display: flex;
    
`;

// Side bar menu
export const MenuBar = styled.nav `
    background-color: rgb(20, 26, 74);
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
    width: 88vw;
    background-color: skyblue;
`;

export const PrimaryBtn = styled.button `
    width: 13vw;
    padding: 15px 2px 15px 2px;
    background-color: rgb(38, 254, 238);
    border-radius: 30px;
    border: none;
    color: black;
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    font-size: 13px;
    
`;

export const Anchar = styled.a `
    width: 12vw;
    font-size: 15px;
    padding: 13px 0px 13px 15px;
    background-color: none;
    display: flex;
    color: black;
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    text-decoration: none;
    color: white;

    &:hover {
       background-color: #78b4b421;
       color: rgb(38, 254, 238);
       border-right: 2px solid rgb(38, 254, 238) ;
    }
`;
