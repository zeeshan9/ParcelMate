import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Typography } from '@mui/material';
import Grid from '../../components/Grid';
import { Container } from './inventory.styled';
import useApi from '../../hooks/useApi';
import AppContext from '../../contexts/appContext';

const Inventory = () => {
  // let [dataRows, setDataRows] = useState({});
  const { data, setData } = useContext(AppContext);
  
  const { responseData, isLoading, error, fetchData } = useApi();

  useEffect(() => {
    fetchData('https://mocki.io/v1/c9b9baf0-f111-43ec-acb6-90af3fe934a6');
  }, [fetchData])
    console.log('render')
  // const memoizedGrid = useMemo(() => <Grid data={data} />, [data]);

  useEffect(() => {
    const formatedData = responseData?.map(x => {
              x.item.quantity = x.quantity
              return x.item
            })
    if(responseData) {
      setData((prevState) => ({...prevState, items: formatedData}))
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