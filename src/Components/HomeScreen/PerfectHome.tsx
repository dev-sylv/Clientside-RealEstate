import React from 'react'
import styled from 'styled-components';

const PerfectHome = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <h1>Let's find home that's <br /> perfect for you</h1>
            </Wrapper>
        </Container>
    </div>
  )
}

export default PerfectHome;

const Container = styled.div`
    width: 100%;
    background-color: #F8F9FA;
    padding: 50px 0px 50px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 95%;
    background-color: red;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #005555;
    h1{
        text-align: center;
    }
`;