import React, { useContext, useEffect } from 'react'
import { Typography } from '@mui/material';
import { Container } from './inventory.styled';
import useApi from '../../hooks/useApi';
import AppContext from '../../contexts/appContext';
import { getLocalData, isStrgEmpty, persistData } from '../../Util/utilities';
import { Button } from "@mui/material";
import Table from '../../components/common/table';

const Inventory = () => {
  const { data, setData } = useContext(AppContext);
  const { responseData, isLoading, error, fetchData } = useApi();

  useEffect(() => {
    if(isStrgEmpty()) {
      fetchData('https://mocki.io/v1/c9b9baf0-f111-43ec-acb6-90af3fe934a6');
    }
  }, [fetchData])

  useEffect(() => {
    if(isStrgEmpty()) {
      const formatedData = responseData?.lines?.map(x => {
        x.item.quantity = x.quantity
        return x.item
      })
        persistData({ ...getLocalData(), items: formatedData});
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
      <Table columns={columns} data={data?.items}/>
    </Container>
  )
}

const columns = [
  { field: "name", headerName: "Title", width: 350  },
  { field: "quantity", headerName: "Quantity", width: 200  },
  { field: "price", headerName: "Price", width: 200  },
  {
    field: "action",
    headerName: "Action",
    width: 250 ,
    renderCell: (params) => {
      const navigateToInventory = () => {
        window.location.href = `update-inventory/${params.id}`
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

export default Inventory;