import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import theme, { color } from "../theme";

export const PromotionContainer=styled(Box)(({theme})=>({
  [theme.breakpoints.up('md')]:{
    padding:'40px 0px 40px 40px'
  },
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  padding:'20px 0px 20px 0px',
  overflow:'hidden',
  background:color.lightGrape
}))

export const MessageText=styled(Typography)(({theme})=>({
  // fontFamily: '"Montez","cursive',
  fontFamily: '"Montez", cursive',
  textAlign:'center',
  fontSize:'1.5rem',
  color:color.white,
  [theme.breakpoints.up('md')]:{
    fontSize:'3rem',
  }
}))
