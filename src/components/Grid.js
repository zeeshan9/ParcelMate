import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button } from "@mui/material";

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


const Grid = ({data}) => {

  return (
    <div style={{ height: 670, width: "100%" }}>
      {data && data?.items &&
      <DataGrid
        rows={data.items}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 20, 30]}
        pagination
        components={{ Toolbar: GridToolbar }}
      />}
    </div>
  )
}

const rows = [
  { id: 1, title: "Product 1", quantity: 12, price: 10 },
  { id: 2, title: "Product 2", quantity: 13, price: 15 },
  { id: 3, title: "Product 3", quantity: 41, price: 20 },
  { id: 4, title: "Product 4", quantity: 74, price: 5 },
  { id: 5, title: "Product 5", quantity: 72, price: 25 },
  { id: 6, title: "Product 6", quantity: 14, price: 30 },
  { id: 7, title: "Product 7", quantity: 33, price: 8 },
  { id: 8, title: "Product 8", quantity: 52, price: 12 },
  { id: 9, title: "Product 9", quantity: 17, price: 18 },
  { id: 10, title: "Product 10", quantity: 45, price: 6 },
];

export default Grid