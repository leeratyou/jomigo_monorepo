import React, { FC, useMemo, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from 'store'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { formatDate } from 'utils/formatters'
import Box from '@mui/material/Box'

const years_mock = ['2006', '2007', '2008', '2009', '2010', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']

const Search: FC = () => {
  const [ year, setYear ] = useState<string|undefined>()
  const { launchesStore: { launches, isLoading, setFilter } } = useStore()
  
  const years = useMemo(() => launches.map(launch => formatDate(launch.launch_date_utc, { to: 'yyyy' })).uniq(), [launches.length])
  
  const handleChange = (year: any) => {
    const value = year === 'all' ? undefined : year
    setYear(value)
    setFilter('year', value)
  }
  
  return (
    <Box sx={{ maxWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel>Year</InputLabel>
        <Select
          value={year}
          label="Year"
          onChange={handleChange}
        >
          <MenuItem value={'all'} key={'all'}>All</MenuItem>
          {years_mock.map(year => <MenuItem value={year} key={year}>{year}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  )
}

export default observer(Search)
