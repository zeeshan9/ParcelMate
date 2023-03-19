import React from 'react';
import { Link } from 'react-router-dom';
import { Wrap, ItemText, ButtonGroup, Buttons, LeftButton, RightButton } from './section.styled'
const Section = ({title, discription, leftBtnText, rightBtnText, backgroundImg}) => {
  return (
    <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{ title }</h1>
                <p>{ discription }</p>
            </ItemText>
        <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        <Link to="/offers" style={{color: 'white'}}>{ leftBtnText }</Link>
                    </LeftButton>
                    { rightBtnText && 
                    <RightButton>
                        <Link to="/inventory">{ rightBtnText }</Link>
                    </RightButton>
                    }
                </ButtonGroup>

        </Buttons>
    </Wrap>
  )
}

export default Section

