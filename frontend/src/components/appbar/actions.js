import React from 'react'
import { ActionIconContainerDesktop, ActionIconContainerMobile, MyList } from '../../styles/appbar'
import { Divider, ListItemButton, ListItemIcon } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { color } from '../../styles/theme';

function Actions({matches}) {
  const Component=matches ? ActionIconContainerMobile : ActionIconContainerDesktop
  return (
    <Component>
    <MyList type='row'>
      <ListItemButton sx={{justifyContent:'center'}}>
        <ListItemIcon sx={{display:'flex',justifyContent:'center', color:matches && color.iconOrange}}>
          <ShoppingCartIcon/>
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation='vertical' flexItem/>
      <ListItemButton sx={{justifyContent:'center'}}>
        <ListItemIcon sx={{display:'flex',justifyContent:'center',color: matches && color.iconOrange}}>
          <FavoriteIcon/>
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation='vertical' flexItem/>
      <ListItemButton sx={{justifyContent:'center'}}>
        <ListItemIcon sx={{display:'flex',justifyContent:'center',color: matches && color.iconOrange}}>
          <PersonIcon/>
        </ListItemIcon>
      </ListItemButton>
    </MyList>
    </Component>
  )
}

export default Actions