import React from 'react'
import styled from 'styled-components';
import { FaBed, FaBath } from "react-icons/fa";
import { Link } from 'react-router-dom';

interface house{
    img: string,
    price: string,
    address: string,
    country: string,
    beds: string,
    baths: string,
}

const HouseCard: React.FC<house> = (
    {img, price, address, country, baths, beds}
) => {
  return (
    <div>
        <Card>
            <HouseImg>
                <Img src = {img} />
            </HouseImg>
            <HouseDescription>
                <Wrapper>
                <Price>
                    {price}
                </Price>
                <Address>
                    {address}
                </Address>
                <Country>
                    {country}
                </Country>
                <Rooms>
                    <Bed>
                        <FaBed />
                        &nbsp; 
                        {beds} beds
                    </Bed>
                    <Baths>
                        <FaBath />
                        &nbsp; 
                        {baths} baths
                    </Baths>
                </Rooms>
                <Button to="/property-details">See Details</Button>
                </Wrapper>
            </HouseDescription>
        </Card>
    </div>
  )
}

export default HouseCard;

const Card = styled.div`
    width: 350px;
    height: 500px;
    margin: 20px;
`;
const HouseImg = styled.div`
    width: 100%;
    height: 250px;
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
`;
const HouseDescription = styled.div`
    width: 100%;
    height: 250px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 85%;
    height: 200px;
    /* background-color: gray; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;
const Price = styled.div`
    border-bottom: 2px solid #005555;
    width: 130px;
    color: #005555;
    font-size: 25px;
    font-weight: bolder;
`;
const Address = styled.div`
    color: silver;
    font-size: 15px;
    font-weight: bolder;
`;
const Country = styled.div`
    font-weight: bold;
    color: black;
    font-size: 23px;
`;
const Rooms = styled.div`
    display: flex;
    width: 170px;
    justify-content: space-between;
    color: silver;
    font-weight: bolder;
`;
const Bed = styled.div``;
const Baths = styled.div``;
const Button = styled(Link)`
text-decoration: none;
  width: 130px;
  height: 40px;
  border-radius: 30px;
  background-color: #005555;
  color: #E1E1E1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;