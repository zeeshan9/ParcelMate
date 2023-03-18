import React from 'react'
import { Typography } from '@mui/material'
import { TextField, Button } from "@mui/material";
import { Container,InputsContainer, InputWrapper, ButtonContainer, ButtonGroup } from './offers.styled'

const Offers = () => {
    return (
        <Container>
          <Typography variant="h4" gutterBottom>
              Offers
          </Typography>
          <InputsContainer>
            <InputWrapper>
              <TextField label="Product Name" variant="outlined" />
            </InputWrapper>
            <InputWrapper>
              <TextField label="Quantity" variant="outlined" />
            </InputWrapper>
            <InputWrapper>
              <TextField label="Discounted Price" variant="outlined" />
            </InputWrapper>
          </InputsContainer>
          <ButtonContainer>
            <ButtonGroup>
              <Button className='mr-2' variant="outlined">Cancel</Button>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </ButtonGroup>
            <Button variant="outlined" color="error">
              Delete
            </Button>
          </ButtonContainer>
        </Container>
      );
    }
    
    export default Offers