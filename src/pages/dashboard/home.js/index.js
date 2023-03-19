import React from 'react';
import Section from '../section.js';
import { Container } from './home.styled'

const Home = () => {
  return (
    <Container>
        <Section 
          title="Sada Parcel"
          backgroundImg="model-s.jpg"
          discription="Order Online for Touchless Drivery"
          leftBtnText="Discount Offers"
          rightBtnText="Existing Inventory"
        />

    </Container>
  )
}

export default Home

