import React from 'react'
import styled from 'styled-components';

const AboutText = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <h1>About Us</h1>
                <Wrap>
                    <First>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique debitis vel nisi qui reprehenderit totam? Quod maiores.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe, explicabo nihil. Est, autem error cumque ipsum repellendus veniam sed blanditiis unde ullam maxime veritatis perferendis cupiditate, at non esse!
                        </p>
                        <p>
                        Enim, nisi labore exercitationem facere cupiditate nobis quod autem veritatis quis minima expedita. Cumque odio illo iusto reiciendis, labore impedit omnis, nihil aut atque, facilis necessitatibus asperiores porro qui nam.
                        </p>
                    </First>
                    <Second>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe, explicabo nihil. Est, autem error cumque ipsum repellendus veniam sed blanditiis unde ullam maxime veritatis perferendis cupiditate, at non esse!
                        </p>
                        <p>
                        Enim, nisi labore exercitationem facere cupiditate nobis quod autem veritatis quis minima expedita. Cumque odio illo iusto reiciendis, labore impedit omnis, nihil aut atque, facilis necessitatibus asperiores porro qui nam.
                        </p>
                    </Second>
                </Wrap>
               
            </Wrapper>
        </Container>
    </div>
  )
}
export default AboutText;

const Container = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    padding: 50px 0px 50px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 90%;
    padding: 10px 0px 10px 0px;
    /* background-color: red; */
`;
const Wrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const First = styled.div`
    width: 45%;
    /* background-color: green; */
`;
const Second = styled.div`
     width: 45%;
    /* background-color: blue; */
`;