import { Typography } from '@mui/material'
import React from 'react'
import styled from "styled-components";
import { TextField, Button } from "@mui/material";

const UpdateInventory = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
          Edit Items
      </Typography>
      <InputsContainer>
        <InputWrapper>
          <TextField label="Title" variant="outlined" />
        </InputWrapper>
        <InputWrapper>
          <TextField label="Quantity" variant="outlined" />
        </InputWrapper>
        <InputWrapper>
          <TextField label="Price" variant="outlined" />
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 100%;
  `;
  
const ButtonGroup = styled.div`
  display: flex;
  gap: 10;
  width: 50%;
`


export default UpdateInventory