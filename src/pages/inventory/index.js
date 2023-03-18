import React, { useContext, useEffect } from 'react'
import { Typography } from '@mui/material';
import Grid from '../../components/Grid';
import { Container } from './inventory.styled';
import useApi from '../../hooks/useApi';
import AppContext from '../../contexts/appContext';
import { getLocalData, isStrgEmpty, persistData, stringify } from '../../Util/utilities';

const Inventory = () => {
  const { data, setData } = useContext(AppContext);
  const { responseData, isLoading, error, fetchData } = useApi();

  useEffect(() => {
    if(isStrgEmpty()) {
      console.log('api called 1')
      fetchData('https://mocki.io/v1/c9b9baf0-f111-43ec-acb6-90af3fe934a6');
    }
  }, [fetchData])

  useEffect(() => {
    if(isStrgEmpty()) {
      const formatedData = responseData?.map(x => {
        x.item.quantity = x.quantity
        return x.item
      })
      console.log('api called 2', responseData?.length) 
        persistData(formatedData);
        if(formatedData) {
          setData((prevState) => ({...prevState, items: formatedData}));
        }
    } else {
      setData((prevState) => ({...prevState, items: getLocalData()?.items}));
    }
  }, [responseData, setData])

  if (isLoading) {
    return <p>Loading...</p>;
  } 
      
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <Container >
        <Typography variant="h4" gutterBottom>
          Sada Parcel
      </Typography>
      <Grid data={data} />
    </Container>
  )
}

export default Inventory;