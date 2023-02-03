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
                title = ""
                bio = ""
              />
              <ServiceCard
                img={sale}
                title = ""
                bio = ""
              />
              <ServiceCard
                img={agent}
                title = ""
                bio = ""
              />
              <ServiceCard
                img={house}
                title = ""
                bio = ""
              />
            </Wrapper>
        </Container>
    </div>
  )
}

export default Services;

const Container = styled.div`
    background-color: #F2F4F6;
    width: 100%;
    padding: 20px 0px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    background-color: red;
    width: 95%;
    display: flex;
`;