import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ApplyAgent = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <h2>Be a part of our growing real state agents</h2>
                <Button to="/signup">Apply for Real Estate agent</Button>
            </Wrapper>
        </Container>
    </div>
  )
}

export default ApplyAgent;

const Container = styled.div`
    width: 100%;
    padding: 30px 0px 30px 0px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #005555;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
        letter-spacing: 1.5px;
        font-style: italic;
    }
`;
const Button = styled(Link)`
text-decoration: none;
  width: 300px;
  height: 50px;
  border-radius: 30px;
  background-color: #005555;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: lighter;
  transition: all 350ms;
`;