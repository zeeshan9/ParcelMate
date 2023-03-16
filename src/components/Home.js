import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
  return (
    <Container>
        <Section 
          title="Model S"
          backgroundImg="model-s.jpg"
          discription="Order Online for Touchless Drivery"
          leftBtnText="offers"
          rightBtnText="Existing Inventory"
        />
        {/* <Section 
          title="Model Y"
          backgroundImg="model-y.jpg"
          discription="Order Online for Touchless Drivery"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model 3"
          backgroundImg="model-3.jpg"
          discription="Order Online for Touchless Drivery"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        /> */}
        {/* <Section 
          title="Model X"
          backgroundImg="model-x.jpg"
          discription="Order Online for Touchless Drivery"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Lowest Cost Solar Panels in America"
          discription="Money back garantee"
          backgroundImg="solar-panel.jpg"
          leftBtnText="Order now"
          rightBtnText="Learn more"
        />
        <Section 
          title="Accessories"
          discription=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop now"
        /> */}
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`