import React from 'react';
import styled from "styled-components";
import logo from "../Assets/M_F HOUSING_free-file.png";
import { BsFillTelephoneFill, BsArrowUpSquare, BsBoxArrowDown}  from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import {  FiFacebook } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandTwitter } from "react-icons/tb";
import {BiLocationPlus} from "react-icons/bi";
import {MdEmail} from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
    <Wrapper>
        <FirstDiv>
            <Logo  src={logo}/>
            <p>
              Mercy and Favour real estate <br />
              best real estate deals <br />
              get your dream house  <br />
            </p>
            <p>
            Connect with us on all our social media
            </p>
            <Icons>
                                <Circle>
                                    <TbBrandTwitter />
                                </Circle>
                                <Circle>
                                    <FiFacebook />
                                </Circle>
                                <Circle>
                                    <TfiLinkedin />
                                </Circle>
                                <Circle>
                                    <AiOutlineInstagram />
                                </Circle>
              </Icons>
        </FirstDiv>
        <SecondDiv>
          <Box>
                <h3>SOURCES</h3>
                <Nav to="/about-us">About us</Nav>
                <Nav to="/services">Services</Nav>
                <Nav to="/about-us">Mission</Nav>
                <Nav to="/signup">Become an agent</Nav>
          </Box>

          <Box>
                <h3>Support</h3>
                <Nav to="/all-properties">Business</Nav>
                <Nav to="/all-properties">Blog</Nav>
                <Nav to="agents">Creative</Nav>
                <Nav to="/contact-us">Community</Nav>
                <Nav to="/contact-us">Contact Us</Nav>
          </Box>

          <Box>
              <h3>Contact Info</h3>
              <div>
                <BiLocationPlus />
                <Nav1>No 106 Musuku road Kwabenya, Ghana</Nav1>
              </div>
              <div>
                <MdEmail />
                <Nav1>nicsylvia15f@gmail.com</Nav1>
              </div>
              <div>
                <BsFillTelephoneFill />
                <Nav1>0541516214</Nav1>
              </div>
          </Box>

        </SecondDiv>
        <br />
        <br />
        <br />
        <CopyRg>
            <p>
            Copyright @2023 MF-REAL-ESTATE. All Rights Reserved <span><a href="https://wa.me/233541516214">David Ibekwute</a></span> 
            </p>
        </CopyRg>
        
    </Wrapper>
    <ArrowToTop to="Hero">
          <BsArrowUpSquare />
        </ArrowToTop>
</Container>
  )
}

export default Footer;

const ArrowToTop = styled(Link)`
  position: fixed;
  right: 30px;
  font-size: 35px;
  cursor: pointer;
  color: #005555;
  transition: all 350ms;
  :hover{
    margin-top: -5px;
  }
`;

const Container = styled.div`
    width : 100%;
    background-color: #EFEFEF;
    margin: 0;
    position: relative;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    font-size: 18px;
`;
const FirstDiv = styled.div`
    width : 300px;
    margin-top: 50px;
    margin-left: 90px;

    p{
        font-size: 18px;
        color: gray;
        line-height: 23px;
    }
`;
const SecondDiv = styled.div`
    width : 65%;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

`;
const Logo = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;

`;
const Box = styled.div`
display: flex;
flex-direction: column;
div{
  display: flex;
  margin-left: 15px;
}

`;
const Nav = styled(Link)`
    padding-bottom: 20px;
    font-size: 18px;
    color: rgb(129, 132, 141);
    transition: all 400ms;
    cursor: pointer;
    text-decoration: none;
    :hover{
       text-decoration: underline;
        margin-top: -1px;
    }
`;
const CopyRg = styled.div`
    width: 85%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    color: white;
    background-color: #005555;
    margin-top: 70px;
    span{
      a{
        color: grey;
        text-decoration: none;
      }
    }
`
const Nav1 = styled.div`
   padding-bottom: 20px;
    font-size: 18px;
    color: rgb(129, 132, 141);
    transition: all 400ms;
`;
const Icons = styled.div`
    display: flex;
    color: white;
`;
const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #074237;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 350ms;
    color: white;
    border: 3px solid #074237;
    margin: 10px;
    cursor: pointer;
    :hover{
        border: 2px solid #074237;
        border-color: #16335A;
        background-color: white;
        color: #074237;
        margin-top: -1px;
    }
`;
