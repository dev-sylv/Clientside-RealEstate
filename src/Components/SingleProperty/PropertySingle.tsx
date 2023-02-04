import React from 'react'
import styled from 'styled-components';
import img from "../Assets/img2.jpg";
import agent from "../Assets/agent3.jpg"
import {  AiOutlineInstagram } from "react-icons/ai";
import {  FiFacebook,FiLinkedin } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";
import { TbBrandTwitter } from "react-icons/tb";

const PropertySingle = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Image src={img} />
                <About>
                    <House>
                        <h1>Victoria Island, Lagos, Nigeria</h1>
                        <p>California, United States</p>

                            <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione laborum quo quos omnis sed magnam id, ducimus saepe, debitis error earum, iste dicta odio est sint dolorem magni animi tenetur.
                            </p> 

                            <p> Perferendis eligendi reprehenderit, assumenda molestias nisi eius iste reiciendis porro tenetur in, repudiandae amet libero. Doloremque, reprehenderit cupiditate error laudantium qui, esse quam debitis, eum cumque perferendis, illum harum expedita.</p>
                    </House>
                    <Agent>
                    <Card>
                        
                        <Wrap>
                        <Img src={agent} />
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
                    </Agent>
                </About>
            </Wrapper>
        </Container>
    </div>
  )
}

export default PropertySingle;

const Container = styled.div`
    width: 100%;
    padding: 30px 0px 30px 0px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 95%;
    /* background-color: red; */
    display: flex;
    padding: 10px 0px 10px 0px;
    justify-content: space-between;
`;
const Image = styled.img`
    width: 50%;
    height: 600px;
    /* background-color: green; */
`;
const About = styled.div`
    width: 40%;
    /* background-color: blue; */
    padding: 20px 0px 20px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const House = styled.div`
    width: 100%;
    padding: 10px 0px 10px 0px;
    /* background-color: yellow; */
    display: flex;
    flex-direction: column;
`;
const Agent = styled.div`
    width: 100%;
    padding: 10px 0px 10px 0px;
    /* background-color: orange; */
    display: flex;
    flex-direction: column;
`;
const Card = styled.div`
    width: 350px;
    padding: 20px 0px 20px 0px;
    background-color: transparent;
    /* background-color: red; */
    border-radius: 5px;
    color: #16335A;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const Wrap = styled.div`
    width: 280px;
    display: flex;
    /* background-color: red; */
    flex-direction: column;
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
    margin-bottom: 10px;
`;
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