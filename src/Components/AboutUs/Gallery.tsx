import React from 'react'
import styled from 'styled-components';
import img1 from "../Assets/img_3.jpg";
import img2 from "../Assets/img3.jpg";
import img3 from "../Assets/sylvia7.jpg";

const Gallery = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Div>
                <Img>
                    <img src={img1} alt="" />
                </Img>
                <Image>
                <img src={img2} alt="" />
                </Image>
                <Img>
                <img src={img3} alt="" />
                </Img>
                </Div>
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

export default Gallery;

const Div = styled.div`
    width: 95%;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    padding: 20px 0px 50px 0px;
    flex-wrap: wrap;
`;

const Agent = styled.div`
    width: 90%;
    padding: 10px 0px 10px 0px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #005555;
    text-align: center;
`;
const Num = styled.div`
    font-size: 40px;
    font-weight: bold;
`;
const Award = styled.div`
    font-weight: 300;
`;


const Img = styled.div`
    width: 380px;
    height: 350px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const Image = styled.div`
    width: 380px;
    height: 350px;
    margin-top: 40px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Container = styled.div`
    width: 100%;
    padding: 30px 0px 30px 0px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 95%;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    padding: 20px 0px 20px 0px;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;