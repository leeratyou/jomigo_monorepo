import React from 'react'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'

const Remove = styled(CloseIcon)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '1.5rem'
}))

export default Remove
