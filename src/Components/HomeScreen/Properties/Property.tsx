import React from 'react'
import styled from 'styled-components';
import HouseCard from './HouseCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../Assets/sylvia1.jpg"
import img2 from "../../Assets/sylvia2.jpg"
import img3 from "../../Assets/sylvia3.jpg"
import img4 from "../../Assets/sylvia5.jpg"
import img5 from "../../Assets/sylvia7.jpg"
import img6 from "../../Assets/house3.jpg"
import { Link } from 'react-router-dom';

const Property = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "ease-in-out",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <div>
        <Container>
            <Wrapper>
                <Properties>
                    Popular Properties
                    <Button to="/all-properties">View all Properties</Button>
                </Properties>
                <Slider {...settings}>
                    <div>
                        <HouseCard 
                        img ={img1}
                        price = "#1,200,000"
                        address='Phase 1 Victoria Island'
                        country='Lagos, Nigeria'
                        beds='2'
                        baths='2'
                         />
                    </div>
                    <div>
                        <HouseCard 
                        img ={img2}
                        price = "#4,200,000"
                        address='457 Kwambenya Road'
                        country='Accra, Ghana'
                        beds='4'
                        baths='2'
                         />
                    </div>
                    <div>
                        <HouseCard 
                        img ={img3}
                        price = "#3,200,000"
                        address='120 Divine Estate, Haruna'
                        country='Apapa, Lagos'
                        beds='3'
                        baths='3'
                         />
                    </div>
                    <div>
                        <HouseCard 
                        price = "#1,200,000"
                        img ={img4}
                        address='15 Bode Thomas, Ikorodu'
                        country='Lagos, Nigeria'
                        beds='3'
                        baths='2'
                         />
                    </div>
                    <div>
                        <HouseCard 
                        price = "#2,600,000"
                        img ={img5}
                        address='673 Fashansi Close, Ota'
                        country='Iba, Lagos'
                        beds='3'
                        baths='3'
                         />
                    </div>
                    <div>
                        <HouseCard 
                        price = "#1,002,000"
                        img ={img6}
                        address='101 Augustine University'
                        country='Mowe, Lagos-Ibadan'
                        beds='4'
                        baths='4'
                         />
                    </div>
                </Slider>
                <Properties>
                    {/* <Movement>Prev</Movement>
                    <Movement>Next</Movement> */}
                </Properties>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Property;

const Container = styled.div`
    width: 100%;
    padding: 40px 0px 40px 0px;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 95%;
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
`;
const Properties = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 0px 10px 0px;
    justify-content: space-between;
    color: #005555;
    font-size: 30px;
    font-weight: bold;
    flex-wrap: wrap;
`;
const Button = styled(Link)`
text-decoration: none;
  width: 200px;
  height: 50px;
  border-radius: 30px;
  background-color: #005555;
  color: silver;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: lighter;
  transition: all 350ms;
  :hover{
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }
`;