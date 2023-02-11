import React from 'react'
import styled from 'styled-components';
import notfound from "./Assets/404_page.webp";

const PageNotFound = () => {
  return (
    <div>
        <Container>
            <img src={notfound} alt="" />
        </Container>
    </div>
  )
}

export default PageNotFound;

const Container = styled.div`
    width: 100%;
    height: 90vh;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;