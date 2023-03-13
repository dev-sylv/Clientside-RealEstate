import React from 'react'
import styled from 'styled-components';
import ServiceCard from './ServiceCard';
import agent from "../../Assets/agent.png"
import property from "../../Assets/property.png";
import sale from "../../Assets/sale.png"
import house from "../../Assets/house.png"

const Services = () => {
  return (
    <div>
        <Container>
            <Wrapper>
              <ServiceCard
                img={property}
                title = "Our Properties"
                bio = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus."
                padding='38px 0px 35px 0px'
              />
              <ServiceCard
                img={sale}
                title = "Property for Sale"
                bio = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus."
                padding='40px 0px 40px 0px'
              />
              <ServiceCard
                img={agent}
                title = "Real Estate Agent"
                bio = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus."
                padding='42px 0px 40px 0px'
              />
              <ServiceCard
                img={house}
                title = "House for Sale"
                bio = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus."
                padding='40px 0px 40px 0px'
              />
            </Wrapper>
        </Container>
    </div>
  )
}

export default Services;

const Container = styled.div`
    background-color: #F2F4F6;
    overflow: hidden;
    /* background-color: red; */
    width: 100%;
    padding: 20px 0px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    /* background-color: blue; */
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;