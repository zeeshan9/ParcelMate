import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);

    
  
    return (
    <Container>
      <a href="dashboard">
        <img src='/images/logo.svg' alt='logo'/>
      </a>
      <Menu>

            {/* <a href='#'>ModelS</a>
            <a href='#'>ModelX</a>
            <a href='#'>Model3</a> */}
      </Menu>
      <RightMenu>
          <a href="dashboard">Dashbaord</a>
          <a href="inventory">inventory</a>
          <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>      
           <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>

        <li><a herf="#">Existing Inventory</a></li>
        <li><a herf="#">Used Inventory</a></li>
        <li><a herf="#">Trade-in</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  top: 0;
  left: 0;
  right: 0;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
      font-weight: 600;
      text-decoration: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
      font-weight: 600;
      text-decoration: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a {
      font-weight: 600
    }
  }
`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Redirect = styled.a`
  text-underline: none
`