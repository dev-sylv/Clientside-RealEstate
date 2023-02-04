import React from 'react'
import styled from 'styled-components';
import hero from "../Assets/img_4.jpg";

const Hero = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <h1>Victoria Island, Lagos</h1>
                <p><a href="/">Home</a> / <a href="/all-properties">Properties</a> / victoria island, lagos</p>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Hero;

const Container = styled.div`
    width: 100%;
    height: calc(80vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    background-image: url(${hero});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    position: relative;
    ::before{
        content: "";
        width: 100%;
        height: calc(80vh - 70px);
        background-color: rgba(0, 0, 0, 0.7);
        position: absolute;
    }
`;
const Wrapper = styled.div`
    z-index: 2;
    text-align: center;
    a{
        text-decoration: none;
        color: white;
    }
    p{
        color: grey;
    }
`;