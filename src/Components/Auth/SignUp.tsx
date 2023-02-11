import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../Assets/M_F HOUSING_free-file1.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BiImageAlt } from "react-icons/bi";
import axios from "axios";
import { CurrentUser } from '../GlobalContext/Globalprops';


// API LINK => https://sylvia-realestate-api.onrender.com

const SignUp = () => {

  const navigate = useNavigate();

  // Global context for currentusers:
  const RegisterContext = useContext(CurrentUser)

  // States for passsword icon:
  const [showEye, setShowEye] = useState(true);

  const showPassword = () =>{
    setShowEye(!showEye)
  }
  
  // states for signup:
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [password, setPassword] = useState("");

  // Consuming Api for agent sign up/register:
  // https://sylvia-realestate-api.onrender.com/registeragents
  const RegisterAgents = async(e: any) =>{
    e.preventDefault();
    await axios.post("http://localhost:2080/api/agents/registeragents", {
      name, email, bio, password
    }).then((res) =>{
      console.log(res.data.data)
      RegisterContext?.setUserData(res.data.data)
      console.log("Sign up is working")
      navigate("/login")
    })
  }

  return (
    <div>
      <Container>
        {/* <First></First>
        <Second></Second> */}
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
            <Wrap2  onSubmit={RegisterAgents}>
              <h2>Sign Up</h2>
              <Form>

                  {/* <Circle>
                            <BiImageAlt />
                  </Circle>
                  <Use id="pix" type={"file"} />
                  <ImgButton htmlFor= "pix">Upload Your Image</ImgButton> */}

                 <Div>
                    <h4>Name</h4>
                  <input type="text"
                  value={name}
                  onChange = {
                    ((e) =>{
                      setName(e.target.value)
                    })
                  }
                  required
                   placeholder='Enter your name...' />
                </Div>

                <Div>
                    <h4>Email</h4>
                  <input type="email"
                  onChange={((e) =>{
                    setEmail(e.target.value)
                  })}
                  required
                  placeholder='Enter your email...' />
                </Div>

                <Div>
                    <h4>Bio</h4>
                  <input type="text"
                  onChange={((e) =>{
                    setBio(e.target.value)
                  })}
                  required
                  placeholder='Enter a brief bio ...' />
                </Div>

                {
                  showEye ? (
                    <Div>
                    <h4>Password</h4>
                    <input type="password"
                    required
                    onChange={((e) =>{
                      setPassword(e.target.value)
                    })}
                     placeholder='Enter a strong password...' />
                     <div>
                      <AiFillEyeInvisible onClick={showPassword} />
                    </div>
                </Div>
                  ) : (
                    <Div>
                    <h4>Password</h4>
                    <input type="text"
                     required
                     onChange={((e) =>{
                       setPassword(e.target.value)
                     })}
                    placeholder='Enter a strong password...' />
                    <div>
                    <AiFillEye onClick={showPassword} />
                    </div>
                </Div>
                  )
                }
              </Form>
              <Button type = "submit">Sign Up</Button>
              <P>Already have an account, please login <a href="/login">here</a></P>
            </Wrap2>
          </Two>
       </Wrapper>
      </Container>
    </div>
  )
}

export default SignUp;


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

const Use = styled.input`
    display: none;
`;

const ImgButton = styled.label`
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

const Container = styled.div`
  width: 100%;
  padding: 20px 0px 20px 0px;
  /* height: calc(100vh - 70px); */
  display: flex;
  background-color: #005555;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: relative; */
  color: #005555;
`;
const Wrapper = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  width: 80%;
  padding: 20px 0px 20px 0px;
  /* height: 70vh; */
  /* position: absolute; */
  /* right: 30px; */
  /* background-color: green; */
`;
// const First = styled.div`
//   width: 42%;
//   padding: 20px 0px 20px 0px;
//   /* height: calc(100vh - 70px); */
//   background-color: #005555;
// `;
// const Second = styled.div`
//   width: 58%;
//   padding: 20px 0px 20px 0px;
//   /* height: calc(100vh - 70px); */
//   background-color: white;
// `;
const One = styled.div`
  width: 30.3%;
  padding: 20px 0px 20px 0px;
  /* height: 95vh; */
  background-color: #005555;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
`;
const Two = styled.div`
  width: 50%;
  /* height: 100vh; */
  padding: 20px 0px 20px 0px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
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
const Wrap2 = styled.form`
  /* width: 50%; */
  padding: 15px 0px 15px 0px;
  /* background-color: red; */
  /* height: 100vh; */
  h2{
    text-align: center;
  }
`;
const Form = styled.div`
  /* background-color: green; */
  h4{
    margin: 0;
    margin-bottom: 5px;
  }
  input{
    width: 280px;
    height: 35px;
    border-radius: 5px;
    outline: #005555;
    border: 1px solid #005555;
    padding-left: 20px;
  }
`;
const Div  = styled.div`
  /* background-color: orange; */
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  div{
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    right: 20px;
    bottom: 5px;
  }
`;
const Button = styled.button`
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