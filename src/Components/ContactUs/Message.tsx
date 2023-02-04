import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../Assets/M_F HOUSING_free-file1.png";

const Message = () => {
  return (
    <div>
        <Container>
        
       <Wrapper>
          <Two>
            <Wrap2>
              <h2>Send me a message</h2>
              <Button><a href="https://wa.me/233541516214">Hi me on whatsapp</a></Button>
              <P>Don't have an account, please register <a href="/signup">here</a></P>
            </Wrap2>
          </Two>
       </Wrapper>
      </Container>
    </div>
  )
}

export default Message;

const Container = styled.div`
  width: 100%;
  padding: 30px 0px 30px 0px;
  display: flex;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  width: 80%;
  height: 70vh;
  align-items: center;
  justify-content: center;
`;
const Two = styled.div`
  width: 50%;
  height: 70vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap2 = styled.div`
  h2{
    text-align: center;
  }
`;

const Button = styled.div`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  background-color: #005555;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  margin-top: 30px;
  transition: all 350ms;
  a{
    text-decoration: none;
    color: white;
  }
`;
const P = styled.div`
  color: #005555;
 a{
  text-decoration: none;
  color: #005555;
  transition: all 350ms;
  :hover{
    text-decoration: underline;
  }
 }
`;