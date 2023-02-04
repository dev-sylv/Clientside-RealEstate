import React from 'react'
import styled from 'styled-components';
import HouseCard from '../HomeScreen/Properties/HouseCard';
import img1 from "../Assets/img-2.jpg"

const HouseGallery = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <HouseCard 
                        img ={img1}
                        price = "#1,200,000"
                        address='Phase 1 Victoria Island'
                        country='Lagos, Nigeria'
                        beds='2'
                        baths='2'
                 />
                <HouseCard 
                        img ={img1}
                        price = "#1,200,000"
                        address='Phase 1 Victoria Island'
                        country='Lagos, Nigeria'
                        beds='2'
                        baths='2'
                 />
                <HouseCard 
                        img ={img1}
                        price = "#1,200,000"
                        address='Phase 1 Victoria Island'
                        country='Lagos, Nigeria'
                        beds='2'
                        baths='2'
                 />
                <HouseCard 
                        img ={img1}
                        price = "#1,200,000"
                        address='Phase 1 Victoria Island'
                        country='Lagos, Nigeria'
                        beds='2'
                        baths='2'
                 />
                <HouseCard 
                        img ={img1}
                        price = "#1,200,000"
                        address='Phase 1 Victoria Island'
                        country='Lagos, Nigeria'
                        beds='2'
                        baths='2'
                 />
                <HouseCard 
                        img ={img1}
                        price = "#1,200,000"
                        address='Phase 1 Victoria Island'
                        country='Lagos, Nigeria'
                        beds='2'
                        baths='2'
                 />
            </Wrapper>
        </Container>
    </div>
  )
}

export default HouseGallery;

const Container = styled.div`
    width: 100%;
    padding: 20px 0px 40px 0px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
     width: 95%;
    padding: 20px 0px 20px 0px;
    /* background-color: red; */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;