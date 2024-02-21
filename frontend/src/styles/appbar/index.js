import { Box, IconButton, List, Typography } from "@mui/material";
import {styled} from "@mui/system";
import { color } from "../theme";
import "@fontsource/montez"


export const AppbarContainer=styled(Box)(()=>({
  marginTop:4,
  padding:'2px 8px',
  display:'flex',
  justifyContent:"center",
  alignItems:'center'
}))

export const AppbarHeader=styled(Typography)(()=>({
  padding:'4px',
  flexGrow:1,
  fontSize:'4em',
  fontFamily:"'Montez','cursive'",
  color:color.secondary
}))

export const MyList=styled(List)(({type})=>({
  display:type==='row'?'flex':'block',
  justifyContent:'center',
  alignItems:'center',
  flexGrow:3,
}))

export const ActionIconContainerMobile=styled(Box)(()=>({
  display:'flex',
  position:'fixed',
  bottom:0,
  left:0,
  background:color.gray,
  width:'100%',
  alignItems:'center',
  zIndex:99,
  borderTop:`1px solid ${color.primary}` 
}))

export const ActionIconContainerDesktop=styled(Box)(()=>({
  flexGrow:0
}))

export const DrawerCloseButton=styled(IconButton)(()=>({
  position:'absolute',
  top:10,
  left:'250px',
  zIndex:1999
}))