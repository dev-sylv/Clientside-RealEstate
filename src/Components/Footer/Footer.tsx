import React from 'react';
import styled from "styled-components";
import logo from "../Assets/M_F HOUSING_free-file.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import {  FiFacebook,FiLinkedin } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandTwitter } from "react-icons/tb";
import {BiLocationPlus} from "react-icons/bi";
import {MdEmail} from "react-icons/md";

const Footer = () => {
  return (
    <Container>
    <Wrapper>
        <FirstDiv>
            <Logo  src={logo}/>
            <p>
              Mercy and Favour real estate <br />
              best real estate deals <br />
              get your dream house <br />
              Connect with us on all our social media <br />
              channels.
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
                <Nav>About us</Nav>
                <Nav>Services</Nav>
                <Nav>Mission</Nav>
                <Nav>Become an agent</Nav>
          </Box>

          <Box>
                <h3>Support</h3>
                <Nav>Business</Nav>
                <Nav>Blog</Nav>
                <Nav>Creative</Nav>
                <Nav>Community</Nav>
                <Nav>Contact Us</Nav>
          </Box>

          <Box>
              <h3>Contact Info</h3>
              <div>
                <BiLocationPlus />
                <Nav>No 106 Musuku road Kwabenya, Ghana</Nav>
              </div>
              <div>
                <MdEmail />
                <Nav>nicsylvia15f@gmail.com</Nav>
              </div>
              <div>
                <BsFillTelephoneFill />
                <Nav>0541516214</Nav>
              </div>
          </Box>

        </SecondDiv>
        <br />
        <br />
        <br />
        <CopyRg>
            <p>
            Copyright @2022 MF-REAL-ESTATE. All Rights Reserved <span>David Ibekwute</span> 
            </p>
        </CopyRg>
    </Wrapper>
</Container>
  )
}

export default Footer;

const Icons = styled.div`
    display: flex;
    color: white;
`;
const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #16335A;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 350ms;
    color: white;
    border: 3px solid #16335A;
    margin: 10px;
    cursor: pointer;
    :hover{
        border: 2px solid #16335A;
        border-color: #16335A;
        background-color: white;
        color: #16335A;
        margin-top: -1px;
    }
`;

const Container = styled.div`
    width : 100%;
    background-color: #EFEFEF;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    flex-wrap: wrap;
    color:  #301D44;
    font-size: 18px;
`;
const FirstDiv = styled.div`
    width : 300px;
    margin-top: 50px;
    margin-left: 90px;

    p{
        font-size: 13px;
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
  width: 28%;
  height: 28%;
  object-fit: contain;

`;
const Box = styled.div`
div{
  display: flex;
  margin-left: 15px;
}

`;
const Nav = styled.div`
    padding-bottom: 20px;
    font-size: 13px;
    color: rgb(129, 132, 141);
    transition: all 400ms;

    :hover{
        color: red; 
        cursor: pointer;
        font-size: 11px;
        transform: scale(0.9);
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
      color: grey;
    }
`