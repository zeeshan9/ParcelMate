import React from 'react';
import styled from 'styled-components';

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
                        { leftBtnText }
                    </LeftButton>
                        { rightBtnText && 
                    <RightButton>
                        { rightBtnText }
                    </RightButton>
                    }
                </ButtonGroup>
            {/* <DownArrow src='/images/down-arrow.svg'>
            </DownArrow> */}
        </Buttons>
    </Wrap>
  )
}

export default Section

// width: 100vw;
// height: 100vh;
// background-image: url('/images/model-s.jpg');
// background-image: ${props => `url(/images/${props.bgImage})`}
const Wrap = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex; 
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer;
    margin: 8px 8px 0 0;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
` //this will allow us to inheret all the styles of the LeftButton

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s
`

const Buttons = styled.div``