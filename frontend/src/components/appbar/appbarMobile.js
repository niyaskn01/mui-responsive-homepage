import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { AppbarContainer, AppbarHeader } from '../../styles/appbar';
import { IconButton } from '@mui/material';
import Actions from './actions';
import Search from '@mui/icons-material/Search';
import { useUIContext } from '../../context';

function AppbarMobile({matches}) {
  const {setIsOpen,setShowSearchBox} =useUIContext()
  
  return (
    <AppbarContainer>
      <IconButton onClick={()=>setIsOpen(true)}>
        <MenuIcon/>
      </IconButton>
      <AppbarHeader textAlign={'center'} variant='h4'>
        Hey Buddy
      </AppbarHeader>
      <IconButton onClick={()=>setShowSearchBox(true)}>
        <Search/>
      </IconButton>
      <Actions matches={matches}/>
    </AppbarContainer>
  )
}

export default AppbarMobile