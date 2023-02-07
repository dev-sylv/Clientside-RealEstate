import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import slide1 from "../Assets/counter-bg.jpg";
import slide2 from "../Assets/sylvia2.jpg";
import slide3 from "../Assets/house-2.jpg";
import slide4 from "../Assets/img_5.jpg";
import slide5 from "../Assets/sylvia4.jpg";
import slide6 from "../Assets/img_3.jpg";

const Hero = () => {

  const settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "ease-in-out",
  }
 
  return (
    <div>
        <Container id='Hero'>
        <Maintext>
            <h3>The Simplest <br /> Way to Find Property</h3>
            <p>Search For Your Dream House - Easiest way to find your dream home </p>
          <InputField>
            <input type="search" placeholder = "Search by price, Agent, Location" />
            <Search>Search</Search>
          </InputField>
  
        </Maintext>
      <Slider {...settings}>
        <Container>
          <img src={slide1} alt="" />
        </Container>
        <Container>
          <img src={slide2} alt="" />
        </Container>
        <Container>
          <img src={slide3} alt="" />
        </Container>
        <Container>
          <img src={slide4} alt="" />
        </Container>
        <Container>
          <img src={slide5} alt="" />
        </Container>
        <Container>
          <img src={slide6} alt="" />
        </Container>
      
      </Slider>
    </Container>
    </div>
  )
}

export default Hero;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  overflow: hidden;
  position: relative; 

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Maintext = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  height : 100vh;
  width : 100%;
  z-index: 1;
  color : white;
  h3{
    font-size: 50px;
    margin: 0;
  }
  p{
    font-size: 20px;
    margin: 0;
    margin-top: 5px;
  }
  @media screen and (max-width: 768px) {
    p{
      font-size: 18px;
      /* background-color: black; */
    }
  }
  @media screen and (max-width: 425px) {
    h3{
      font-size: 30px;
    }
    p{
      /* font-size: 12px; */
      width: 280px;
      /* background-color: red; */
    }
  }
`;
const InputField = styled.div`
  display: flex;
  width: 650px;
  padding: 10px 0px 10px 0px;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;
  margin-top: 10px;
  /* background-color: blue; */
  input{
    width: 500px;
    padding: 15px 0px 15px 0px;
    /* height: 50px; */
    border-radius: 30px;
    background-color: white;
    outline: 0;
    border: 0;
    padding-left: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 450px;
    input{
      @media screen and (max-width: 768px) {
      width: 300px;
  }
    }
  }
  @media screen and (max-width: 425px) {
    width: 310px;
    /* background-color: blue; */
    input{
      @media screen and (max-width: 425px) {
      width: 220px;
  }
    }
  }
`;
const Search = styled.div`
  width: 120px;
  padding: 15px 0px 15px 0px;
  /* height: 50px; */
  border-radius: 30px;
  background-color: #005555;
  color: #F2F6F6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    width: 80px;
    padding: 10px 0px 10px 0px;
  }
`;