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

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`