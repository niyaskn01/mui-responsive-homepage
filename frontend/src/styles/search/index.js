import { Box, TextField } from "@mui/material";
import {styled} from "@mui/system";
import { color } from "../theme";

export const SearchBoxContainer=styled(Box)(({theme})=>({
  position:'absolute',
  top:0,
  left:0,
  width:'100%',
  height:'100%',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  opacity:0.9,
  zIndex:9000,
  backgroundColor:color.grape
}))

export const SearchField=styled(TextField)(({theme})=>({
  marginLeft:20,
  '.MuiInputLabel-root':{
    color:color.white
  },
  '.MuiInput-root':{
    fontSize:'1rem',
    [theme.breakpoints.up('md')]:{
      fontSize:'2rem'
    },
    color:color.gray
  },
  'MuiInput-root::before':{
    borderBottom:`1px solid ${color.white}`
  }
}))