import React from 'react'
import styled from 'styled-components';
import hero from "../Assets/hero_bg_3.jpg";
import {  AiOutlineInstagram } from "react-icons/ai";
import {  FiFacebook,FiLinkedin } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandTwitter } from "react-icons/tb";
import agent1 from "../Assets/agent1.jpg"
import agent2 from "../Assets/agent1.jpg"
import agent3 from "../Assets/agent1.jpg"

const AllAgents = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <h1>Our Agents</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique debitis vel nisi qui 
                </p>
                <Property>
                    <Card>
                        <Img src={agent1} />
                        <Wrap>
                            <h3>James Doe</h3>
                            <h5>Real Estate Agent</h5>
                            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Facere officiis inventore <br /> cumque tenetur laboriosam, minus culp<br /> doloremque odio, neque molestias? </p>
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
                        </Wrap>
                    </Card>
                    <Card>
                        <Img src={agent2} />
                        <Wrap>
                            <h3>James Doe</h3>
                            <h5>Real Estate Agent</h5>
                            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Facere officiis inventore <br /> cumque tenetur laboriosam, minus culp<br /> doloremque odio, neque molestias? </p>
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
                        </Wrap>
                    </Card>
                    <Card>
                        <Img src={agent3} />
                        <Wrap>
                            <h3>James Doe</h3>
                            <h5>Real Estate Agent</h5>
                            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Facere officiis inventore <br /> cumque tenetur laboriosam, minus culp<br /> doloremque odio, neque molestias? </p>
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
                        </Wrap>
                    </Card>
                </Property>
            </Wrapper>
        </Container>
    </div>
  )
}

export default AllAgents;

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

const Card = styled.div`
    width: 350px;
    padding: 20px 0px 20px 0px;
    background-color: white;
    border-radius: 5px;
    color: #16335A;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
const Wrap = styled.div`
    width: 280px;
    /* background-color: yellow; */
    padding: 50px 0px 30px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
        margin: 0;
    }
    h5{
        margin: 0;
        font-weight: 100;
    }
    p{
        /* background-color: black; */
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 280px;
    }
`;
const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -40px;
`;

const Container = styled.div`
    width: 100%;
    background-color: #80808049;
    padding: 50px 0px 20px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 95%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #005555;
    h1{
        text-align: center;
        margin: 0;
    }
    p{
        width: 500px;
        text-align: center;
    }
`;
const Property = styled.div`
    width: 95%;
    /* background-color: blue; */
    padding: 50px 0px 50px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;
