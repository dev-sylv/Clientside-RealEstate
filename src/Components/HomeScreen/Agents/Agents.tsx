import React from 'react'
import styled from 'styled-components';
import hero from "../Assets/hero_bg_3.jpg";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiCheckedShield } from "react-icons/gi";
import img3 from "../../Assets/img3 (1).png"

const Agents = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <h1>Our Agents</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique debitis vel nisi qui 
                </p>
                {/* <Property>
                    <Card>
                        <Img src={img3} />
                        <h3>James Doe</h3>
                        <p>Real Estate Agent</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?</p>
                    </Card>
                </Property> */}
            </Wrapper>
        </Container>
    </div>
  )
}

export default Agents;

const Card = styled.div`
    width: 350px;
    padding: 20px 0px 20px 0px;
    background-color: red;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: transparent;
    position: absolute;
    top: -40px;
`;

const Container = styled.div`
    width: 100%;
    background-color: #80808049;
    padding: 50px 0px 50px 0px;
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
    background-color: blue;
    padding: 30px 0px 30px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
