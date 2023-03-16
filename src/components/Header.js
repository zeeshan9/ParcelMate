import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import sadapayLogo from '../assets/imgs/sadapay.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
    <Container>
      <a href="dashboard">
        <Img src={sadapayLogo} alt='logo'/>
      </a>
      <Menu>

            {/* <a href='#'>ModelS</a>
            <a href='#'>ModelX</a>
            <a href='#'>Model3</a> */}
      </Menu>
      <RightMenu>
          {/* <Link to="dashboard" activeClassName="active-link" >Dashbaord</Link>
          <Link to="dashboard" activeClassName="active-link" >Inventory</Link> */}
          <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>      
           <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>

        <li><Link to="dashboard"  >Dashbaord</Link></li>
        <li><Link to="inventory"  >Existing Inventory</Link></li>
        <li><Link to="offers"  >Discount Offers</Link></li>
      </BurgerNav>
    </Container>
  )
}

export default Header;

const Img = styled.img`
  height: 2.5rem;
`
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
  background-color: whitesmoke;
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

// const Navigate = styled(Link)`
//   color: var(--primary-color);
//   text-decoration: none;
//   &:hover {
//     text-decoration: none;
//     color: var(--dark-primary)
//   }
// `