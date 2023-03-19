import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const Table = ({columns, data, pageSize = 10, pageOptions=[10, 20, 30]}) => {
  return (
    <div style={{ height: 670, width: "100%" }}>
      {data && data.length > 0 ?
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={pageOptions}
        pagination
        components={{ Toolbar: GridToolbar }}
      /> : (
        <h6>Data is Empty</h6>
      )}
    </div>
  )
}

export default Table