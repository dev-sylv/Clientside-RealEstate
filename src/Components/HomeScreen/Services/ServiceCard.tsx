import React from 'react'
import styled from 'styled-components';

interface service {
    img: string;
    title: string;
    bio: string;
    padding: string
}

const ServiceCard: React.FC<service> = ({
    img, title, bio, padding
}) => {
  return (
    <div>
        <Card pad ={padding}>
            <Wrapper>
                <img src={img} alt="" />
                <h3>{title}</h3>
                <p>
                    {bio}
                </p>
                <P><a href="/services">Learn More</a></P>
            </Wrapper>
        </Card>
    </div>
  )
}

export default ServiceCard;

const Card = styled.div<{pad: string}>`
    width: 250px;
    padding: ${(props) => props.pad};
    margin: 20px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #005555;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const Wrapper = styled.div`
    width: 200px;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h3{
        margin: 0;
    }
    p{
        text-align: center;
    }
`;
const P = styled.div`
    a{
        color: #005555;
        font-weight: 500;
        transition: all 350ms;
        :hover{
            text-decoration: none;
        }
    }
`;