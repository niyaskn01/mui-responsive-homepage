import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import AppbarMobile from './appbarMobile'
import AppbarDesktop from './appbarDesktop'

function Appbar() {
  const theme=useTheme()
  const matches=useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
    {
      matches ? <AppbarMobile matches={matches} /> : <AppbarDesktop matches={matches} />
    }
    </>
  )
}

export default Appbar