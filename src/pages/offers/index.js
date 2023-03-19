import React, { useContext, useEffect } from 'react'
import { Button, Typography } from '@mui/material';
import AppContext from '../../contexts/appContext';
import { getLocalData, isOffersEmpty, persistData } from '../../Util/utilities';
import { Container } from './offers.styled';
import useApi from '../../hooks/useApi';
import Table from '../../components/common/table';

const Offers = () => {
  const { data, setData } = useContext(AppContext);
  const { responseData, isLoading, error, fetchData } = useApi();

  useEffect(() => {
    if(isOffersEmpty()) {
        console.log('offer render 1')
      fetchData('https://mocki.io/v1/2d908213-bd35-4e06-a395-209caa0c8760');
    }
  }, [fetchData])

  useEffect(() => {
    if(isOffersEmpty()) {
      console.log('offer render 2')
        persistData({ ...getLocalData(), offers: responseData});
        if(responseData) {
          setData((prevState) => ({...prevState, offers: responseData}));
        }
    } else {
      setData((prevState) => ({...prevState, offers: getLocalData()?.offers}));
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
          Offers
      </Typography>
      <Table columns={columns} data={data.offers}/>
    </Container>
  )
}


const columns = [
  { field: "name", headerName: "Title", width: 180  },
  { field: "description", headerName: "Description", width: 200  },
  { field: "itemId", headerName: "Item Id", width: 150  },
  { field: "priceReduction", headerName: "Price Reduction", width: 150  },
  { field: "quantityThreshold", headerName: "Quantity Threshold", width: 150  },
  {
    field: "actions",
    headerName: "Action",
    width: 150 ,
    renderCell: (params) => {
      const navigateToInventory = () => {
        window.location.href = `offer/${params.id}`
      };
      return (
        // eslint-disable-next-line no-undef
        <Button variant="contained" color="primary" onClick={() => navigateToInventory()}>
            Edit
        </Button>
      )
    },
  },
];

export default Offers;