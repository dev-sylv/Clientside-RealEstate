import React, {useState} from 'react'
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
    const [show, setShow] =useState(true)

const Hover = () => {
    setShow(!show)
}
  return (
    <div>
        <Card  pad ={padding}>
            <Wrapper>
                <img src={img} alt="" />
                <h3>{title}</h3>
                <p>
                    {bio}
                </p>
                <P onMouseOver={Hover} onMouseOut={Hover}><a href="/services">Learn More</a></P>

                {show ? (
                    <Line></Line>
                ) : null}

            </Wrapper>
        </Card>
    </div>
  )
}

export default ServiceCard;
const Line = styled.div`
    width: 80px;
    height: 2px;
    background-color: #005555;
    margin-top: 10px;
    
`

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
    @media screen and (max-width: 425px) {
        width: 300px;
    }
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
    line-height: 15px;
    transition: 5000ms all ease-out;
    a{
        color: #005555;
        font-weight: 500;
        transition: all 350ms;
        text-decoration: none;
        
        :hover{
            text-decoration: none;
        }
    }
`;