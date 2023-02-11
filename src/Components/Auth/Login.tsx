import axios from 'axios';
import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../Assets/M_F HOUSING_free-file1.png";
import { CurrentUser } from '../GlobalContext/Globalprops';

const Login = () => {

  const navigate = useNavigate();

  const LoginContext = useContext(CurrentUser)

  const [email, setEmail] = useState("");

  // https://sylvia-realestate-api.onrender.com/loginagent
  const AgentLogin = async(e: any) =>{
    e.preventDefault();
    await axios.post("http://localhost:2080/api/agents/loginagent", {
      email
    }).then((res) =>{
      console.log(res.data.data)
      LoginContext?.setUserData(res.data.data)
      console.log("Login now working")
      navigate("/upload-house")
    })
  }


  return (
    <div>
      <Container>
        <First></First>
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
            <Wrap2 onSubmit={AgentLogin}>
              <h2>Sign In</h2>
              <Form>
                <Div>
                    <h4>Email</h4>
                  <input type="email"
                  required
                  onChange={((e) =>{
                    setEmail(e.target.value)
                  })}
                  placeholder='Login with your email...' />
                </Div>
                {/* <Div>
                    <h4>Password</h4>
                  <input type="password" placeholder='Enter your password...' />
                </Div> */}
              </Form>
              <Button type = "submit">Sign In</Button>
              <P>Don't have an account, please register <a href="/signup">here</a></P>
            </Wrap2>
          </Two>
       </Wrapper>
      </Container>
    </div>
  )
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
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
  height: 70vh;
  position: absolute;
  right: 30px;
  /* background-color: green; */
`;
const First = styled.div`
  width: 42%;
  height: calc(100vh - 70px);
  background-color: #005555;
`;
const Second = styled.div`
  width: 58%;
  height: calc(100vh - 70px);
  background-color: white;
`;
const One = styled.div`
  width: 30.3%;
  height: 70vh;
  background-color: #005555;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
`;
const Two = styled.div`
  width: 50%;
  height: 70vh;
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
  /* padding: 15px 0px 15px 0px; */
  /* background-color: red; */
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
`;
const Button = styled.button`
  width: 300px;
  height: 50px;
  outline: gray;
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
  text-decoration: none;
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