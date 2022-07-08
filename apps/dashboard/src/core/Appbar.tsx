import React from 'react'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

import logo from 'assets/logo.png'

const Bar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FFB600'
}))

const Logo = styled('img')(({ theme }) => ({
  width: '8rem',
}))

function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Bar position="static">
        <Toolbar>
          <Logo src={logo} alt='Jomigo logo' />
        </Toolbar>
      </Bar>
    </Box>
  )
}

export default Appbar
