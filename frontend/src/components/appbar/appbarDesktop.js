import React from 'react'
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar'
import { Divider, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Actions from './actions';
import { useUIContext } from '../../context';

function AppbarDesktop({matches}) {
  const {setShowSearchBox}=useUIContext()
  return (
    <AppbarContainer>
      <AppbarHeader>Hey buddy</AppbarHeader>
      <MyList type='row'>
        <ListItemText primary='Home' />
        <ListItemText primary='Categories' />
        <ListItemText primary='Product' />
        <ListItemText primary='Contact Us' />
        <ListItemButton sx={{justifyContent:'center'}}>
          <ListItemIcon sx={{display:'flex',justifyContent:'center'}}
            onClick={()=>setShowSearchBox(true)}
          >
            <SearchIcon/>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation='vertical' flexItem/>
      </MyList>
      <Actions matches={matches}/>
    </AppbarContainer>
  )
} 

export default AppbarDesktop