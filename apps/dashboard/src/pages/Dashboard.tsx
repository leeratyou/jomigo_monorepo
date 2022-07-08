import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import CircularProgress from '@mui/material/CircularProgress'

import Search from 'components/Search'

import Page from 'core/Page'
import Paper from 'ui/Paper'
import Space from 'ui/Space'
import { useStore } from 'store'
import Check from 'ui/icons/Check'
import Remove from 'ui/icons/Remove'

import { LaunchRecord } from 'types/models'
import { formatDate } from 'utils/formatters'
import Box from '@mui/material/Box'

const columns: GridColDef[] = [
  {
    field: 'launch_success',
    headerName: 'Success',
    flex: 0.1,
    align: 'center',
    renderCell: (row: GridRenderCellParams<LaunchRecord>) => row.value ? <Check /> : <Remove />
  },
  {
    field: 'flight_number',
    headerName: 'Flight Number',
    align: 'center',
    flex: 0.2,
  },
  {
    field: 'mission_name',
    headerName: 'Mission Name',
    flex: 1,
  },
  {
    field: 'launch_date_utc',
    headerName: 'Date',
    flex: 0.2,
    type: 'date',
    renderCell: (row: GridRenderCellParams<LaunchRecord['launch_date_utc']>) => <div>{formatDate(row.value!, { to: "dd MMM yyyy 'at' HH:mm" })}</div>
  },
]

const loadingStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '250px'
}

const Dashboard: FC = () => {

  const { launchesStore: { launches, isLoading, setFilter } } = useStore()
  
  return (
    <Page>
      <Paper>
        <Search />
        <Space />
        {isLoading
          ? <Box sx={loadingStyle}><CircularProgress /></Box>
          : <DataGrid
              density='comfortable'
              autoHeight
              rows={launches}
              columns={columns}
              getRowId={(row: LaunchRecord) => row.flight_number}
              rowsPerPageOptions={[10, 20, 100]}
              initialState={{
                sorting: {
                  sortModel: [{ field: 'launch_date_utc', sort: 'asc' }],
                },
                pagination: {
                  pageSize: 10,
                },
              }}
            />
        }
      </Paper>
    </Page>
  )
}

export default observer(Dashboard)
