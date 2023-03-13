import React from 'react'
import styled from 'styled-components';
import hero from "../Assets/hero_bg_3.jpg";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiCheckedShield } from "react-icons/gi";

const PerfectHome = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <h1>Let's find home that's <br /> perfect for you</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique debitis vel nisi qui reprehenderit.
                </p>
                <Property>
                    <First>
                        <Div>
                            <Circle>
                                <AiFillHome />
                            </Circle>
                            <Text>
                                <h3>2M Properties</h3>
                                <p>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Nostrum iste.</p>
                            </Text>
                        </Div>
                        <Div>
                            <Circle>
                                <CgProfile />
                            </Circle>
                            <Text>
                                <h3>Top Rated Agents</h3>
                                <p>Lorem ipsum dolor sit amet consectetur  adipisicing elit. Nostrum iste.</p>
                            </Text>
                        </Div>
                        <Div>
                            <Circle>
                                <GiCheckedShield />
                            </Circle>
                            <Text>
                                <h3>Legit Properties</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>
                            </Text>
                        </Div>
                    </First>
                    <Second>
                        <img src={hero} alt="" />
                    </Second>
                </Property>
                <Agent>
                    <div>
                        <Num>40</Num>
                        <Award># of Buy Properties</Award>
                    </div>
                    <div>
                        <Num>50</Num>
                        <Award># of Sell Properties</Award>
                    </div>
                    <div>
                        <Num>100</Num>
                        <Award># of All Properties</Award>
                    </div>
                    <div>
                        <Num>20</Num>
                        <Award># of Agents</Award>
                    </div>
                </Agent>
            </Wrapper>
        </Container>
    </div>
  )
}

export default PerfectHome;

const Agent = styled.div`
    width: 95%;
    padding: 10px 0px 10px 0px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #005555;
    text-align: center;
    flex-wrap: wrap;
`;
const Num = styled.div`
    font-size: 40px;
    font-weight: bold;
    @media screen and (max-width: 425px) {
        font-size: 30px;
    }
    @media screen and (max-width: 320px) {
        font-size: 27px;
    }
`;
const Award = styled.div`
    font-weight: 300;
    @media screen and (max-width: 425px) {
        margin-bottom: 15px;
    }
`;

const Container = styled.div`
    width: 100%;
    /* background-color: red; */
    /* height: 40px; */
    padding: 50px 0px 50px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;
const Wrapper = styled.div`
    width: 95%;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #005555;
    /* @media screen and (max-width: 320px) {
        flex-direction: column-reverse;
    } */
    h1{
        text-align: center;
        margin: 0;
        @media screen and (max-width: 425px) {
            font-size: 20px;
        }
    }
    p{
        /* width: 500px; */
        text-align: center;
    }
`;
const Property = styled.div`
    width: 95%;
    /* background-color: blue; */
    /* padding: 30px 0px 30px 0px; */
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    flex-wrap: wrap;
    /* flex-direction: column; */
   @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
   }
   @media screen and (max-width: 425px) {
    flex-direction: column-reverse;
    
   }
`;
const First = styled.div`
    width: 50%;
    /* background-color: green; */
    @media screen and (max-width: 768px) {
    width: 90%;
   }
    @media screen and (max-width: 425px) {
    width: 100%;
   }
   @media screen and (max-width: 320px) {
    width: 100%;
   }
`;
const Div = styled.div`
    /* background-color: pink; */
    display: flex;
    /* justify-content: space-between; */
    width: 100%;
    @media screen and (max-width: 320px) {
        margin-bottom: 20px;
        margin-top: 13px;
    }
    @media screen and (max-width: 768px) {
        margin-top: 25px;
    }
    /* margin: 20px; */
`;
const Circle = styled.div`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: #8080809b;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 350ms;
    border: 3px solid #80808024;
    :hover{
        border: 3px solid #005555;
        border-color: #005555;
    }
`;
const Text = styled.div`
    width: 200px;
    /* background-color: red; */
    margin-left: 10px;
    @media screen and (max-width: 320px) {
        margin-left: 15px;
    }
    h3{
        margin: 0;
    }
    p{
        text-align: left;
        @media screen and (max-width: 768px) {
            width: 600px;
        }
        @media screen and (max-width: 425px) {
            width: 280px;
        }
        @media screen and (max-width: 425px) {
            width: 220px;
        }
    }
`;
const Second = styled.div`
    width: 50%;
    @media screen and (max-width: 320px) {
        width: 100%;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media screen and (max-width: 768px) {
    width: 90%;
   }
`;