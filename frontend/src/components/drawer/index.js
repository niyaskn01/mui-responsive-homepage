import {styled} from '@mui/system'
import { Divider, Drawer, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { useUIContext } from '../../context'
import CloseIcon from '@mui/icons-material/Close';
import { DrawerCloseButton } from '../../styles/appbar';
import {lighten} from 'polished'

const MiddleDivider=styled((props)=>(
  <Divider variant='middle' {...props} />
))``

function AppDrawer() {
  const {isOpen, setIsOpen}=useUIContext()
  return (
    <>
    {
        isOpen &&
        <DrawerCloseButton onClick={()=>setIsOpen(false)}>
          <CloseIcon sx={{fontSize:'2rem',color:lighten(0.95,'black')}}/>
        </DrawerCloseButton>
      }
   
    <Drawer open={isOpen}>
      <List>
        <ListItemButton>
          <ListItemText>Home</ListItemText>
        </ListItemButton>
        <MiddleDivider/>
        <ListItemButton>
          <ListItemText>Categories</ListItemText>
        </ListItemButton>
        <MiddleDivider/>
        <ListItemButton>
          <ListItemText>Products</ListItemText>
        </ListItemButton>
        <MiddleDivider/>
        <ListItemButton>
          <ListItemText>Abouts Us</ListItemText>
        </ListItemButton>
        <MiddleDivider/>
        <ListItemButton>
          <ListItemText>Contact Us</ListItemText>
        </ListItemButton>
      </List>
    </Drawer>
    </>
  )
}

export default AppDrawer