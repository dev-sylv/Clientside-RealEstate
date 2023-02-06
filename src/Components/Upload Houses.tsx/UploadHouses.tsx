import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../Assets/M_F HOUSING_free-file1.png";
import { BiImageAlt } from "react-icons/bi"

const UploadHouses = () => {
  return (
    <div>
      <Container>
        
        <Second></Second>
       <Wrapper>
          <One>
            <Wrap>
                <Img to="/">
                  <Logo src = {logo} />
                </Img>
                <h3>
                  Mercy and Favour Real Estate
                </h3>
                <p>Offering you the real best estate and landing deals</p>
            </Wrap>
          </One>
          <Two>
          <Card>
                    <Circle>
                        <BiImageAlt />
                    </Circle>
                    <Use id="pix" type={"file"} />
                    <Button htmlFor= "pix">Upload House Image</Button>
                    <Input placeholder = "Enter Location" />
                    <TextArea placeholder = "Description...." />
                    <Input placeholder = "Enter Agent Name" />
                    <Select>
                        <option>Choose Options</option>
                        <option>Duplex</option>
                        <option>Rent</option>
                        <option>Sale</option>
                        <option>Others</option>
                    </Select>
                    <Submit to="/">Upload House</Submit>
                </Card>
          </Two>
       </Wrapper>
      </Container>
    </div>
  )
}

export default UploadHouses;

const Container = styled.div`
  width: 100%;
  padding: 50px 0px 50px 0px;
  display: flex;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #005555;
`;
const Wrapper = styled.div`
  display: flex;
  width: 80%;
  padding: 20px 0px 20px 0px;
  position: absolute;
  right: 30px;
  /* background-color: green; */
`;
const Second = styled.div`
  width: 58%;
  height: calc(100vh - 70px);
  background-color: white;
`;
const One = styled.div`
  width: 30.3%;
  height: 80vh;
  background-color: #005555;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;
const Two = styled.div`
  width: 50%;
  height: 80vh;
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  padding: 15px 0px 15px 0px;
  flex-direction: column;
  color: white;
  p{
    font-weight: bold;
  }
`;
const Img = styled(Link)``;
const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`;
const Circle = styled.div`
    width: 250px;
    height: 150px;
    border-radius: 5px;
    background-color: lavender;
    display: flex;
    justify-content: center;
    font-size: 40px;
    align-items: center;
    flex-direction: column;

    ::after{
        content: "upload file";
        font-size: 14px;
        color: rgb(0, 0, 0, 0.6);
        font-weight: 500;
    }
`;
const Button = styled.label`
    height: 40px;
    width: 200px;
    background-color: #005555;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: all 350ms;
    cursor: pointer;
    margin-top: 20px;
    :hover{
        transform: scale(0.9);
    }
`;
const Input = styled.input`
    margin: 10px;
    width: 300px;
    border-radius: 3px;
    outline-color: #f8cbe0;
    border: 0.7px solid silver;
    height: 30px;

    ::placeholder{
        padding-left: 10px;
    }
`;
const TextArea = styled.textarea`
    margin: 10px;
    height: 70px;
    width: 300px;
    border-radius: 3px;
    outline-color: #f8cbe0;
    border: 0.7px solid silver;
    resize: none;
    ::placeholder{
        padding-left: 10px;
    }
`;
const Use = styled.input`
    display: none;
`;
const Select = styled.select`
    margin: 10px;
    height: 70px;
    border-radius: 3px;
    outline-color: #f8cbe0;
    border: 0.7px solid silver;
    resize: none;
    width: 370px;
`;
const Submit = styled(Link)`
text-decoration: none;
    width: 150px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-transform: capitalize;
    font-size: 18px;
    font-weight: 500;
    transition: all 350ms;
    cursor: not-allowed;
    height: 40px;
    background-color: #005555;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, 
                rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    @media screen and (max-width: 500px) {
        width: 120px;
        font-size: 14px;
    }
`;
