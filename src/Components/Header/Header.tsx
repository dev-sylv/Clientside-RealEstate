import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import logo from "../Assets/M_F HOUSING_free-file1.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancelPresentation } from "react-icons/md"
import { Link } from 'react-router-dom';
import { CurrentUser } from '../GlobalContext/Globalprops';

const Header = () => {

    const user  = useContext(CurrentUser);

    // For the hamburger and cancel icon
    const [show, setShow] = useState(true);

    // Toggle function for nav, change header
    const showMenu = () =>{
        setShow(!show)
    }

    // Function for change of header
    const HeaderChange = () =>{
        if (window.scrollY > 70) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    window.addEventListener("scroll", HeaderChange)
    
  return (
    <div>
    <Container>
            <Wrapper>
               <Img to="/"> 
                    <Logo src={logo} />
               </Img>
                <Navigation>
                    <First>
                        <Nav to="/">Home</Nav>
                        <Nav to="/about-us">About</Nav>
                        <Nav to="/agents">Agents</Nav>
                        <Nav to="/services">Services</Nav>
                        <Nav to="/all-properties">Properties</Nav>
                        <Nav to="/contact-us">Contact Us</Nav>
                    </First>
                    <Second>
                        <Button to="/signup" width='70px'>Sign Up</Button>
                        <Button to="/login" width='120px'>Upload Houses</Button>
                        <Profile> 
                               {/* {user!.userData!.name.charAt(0).toUpperCase()} */}
                        </Profile>
                    </Second>
                </Navigation>

                {/* For the menu and cancel button to show */}
                {
                show ? (
                    <Menu onClick={showMenu}>
                <RxHamburgerMenu />
            </Menu>
                ) : <Menu onClick={showMenu}>
                <MdCancelPresentation />
            </Menu>
            }
            
            </Wrapper>

            {
                show ? null : <MinimizedNav>
                <Wrap>
                      <Nav to="/">Home</Nav>
                        <Nav to="/about-us">About</Nav>
                        <Nav to="/agents">Agents</Nav>
                        <Nav to="/services">Services</Nav>
                        <Nav to="/all-properties">Properties</Nav>
                        <Nav to="/contact-us">Contact Us</Nav>
                </Wrap>
            </MinimizedNav>
            }

            
        </Container>
    </div>
  )
}

export default Header;

const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    color: white;
    border-radius: 50px;
    border: 1px solid white;
    font-size: 15px;
`;


const MinimizedNav = styled.div`
    width: 100%;
    height: 90vh;
    background-color: blue;
    display: none;
    top: 80px;
    position: absolute;
    left: 0;
    z-index: 20;
    @media screen and (max-width: 768px){
        display: none;
    }
`;
const Wrap = styled.div`
    width: 250px;
    height: 80vh;
    background-color: red;
`;

const Menu = styled.div`
    font-size: 40px;
    color: white;
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
    }
`;

const Container = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #005555;
`;
const Wrapper = styled.div`
    width: 95%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: red; */
`;
const Img = styled(Link)``;
const Logo = styled.img`
    width: 180px;
    height: 180px;
    object-fit: contain;
    cursor: pointer;
    @media screen and (max-width: 425px) {
        width: 150px;
        height: 150px;
    }
`;
const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;
    /* background-color: purple; */
    font-size: 17px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const First = styled.div`
    width: 500px;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const Nav = styled(Link)`
    cursor: pointer;
    color: white;
    transition: all 350ms;
    text-decoration: none;
    :hover{
        color: #F2F4F6;
    }
`;
const Second = styled.div`
    width: 280px;
    /* background-color: blue; */
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const Button = styled(Link)<{width: string}>`
    width: ${(props) => props.width};
    height: 40px;
    background-color: #F8FAFA;
    cursor: pointer;
    font-size: 15px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    align-items: center;
    color: #005555;
    transition: all 350ms;
    text-decoration: none;
    :hover{
        background-color: #005555;
        color: #F2F4F6;
    }
`;
