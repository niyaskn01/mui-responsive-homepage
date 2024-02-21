import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { color } from "../theme";


export const Product=styled(Box)(({theme,showOptions})=>({
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  transition: "transform 0.5s ease",
  transform: showOptions ? 'scale(1.05)' : 'scale(1)',
  [theme.breakpoints.up('md')]:{
    position:'relative'
  }
}))

export const ProductImage=styled('img')(({src,theme})=>({
  src:`url(${src})`,
  width:'100%',
  background:color.grape,
  padding:'10px',
  [theme.breakpoints.down('md')]:{
    width:'80%',
    padding:'24px'
  }
}))

export const ProductActionButton=styled(IconButton)(()=>({
  background:color.white,
  margin:2
}))

export const ProductFavButton=styled(ProductActionButton,{
  shouldForwardProp:prop=>prop!=='isFav'
})(({isFav,theme})=>({
  color:isFav ? color.grape : color.secondary,
  [theme.breakpoints.up('md')]:{
    position:'absolute',
    right:0,
    top :0
  }
}))

export const ProductAddToCart=styled(Button,{
  shouldForwardProp:prop=>prop!=='show'
})(({show,theme})=>({
  width:'120px',
  fontSize:'12px',
  background:color.primary,
  opacity:0.9,
  [theme.breakpoints.up('md')]:{
    position:'absolute',
    bottom:'2%',
    width:'300px',
    padding:'10px 5px',
    width:'90%'
  }
}))

export const ProductMetaWrapper=styled(Box)(({theme})=>({
  padding:4,
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
})) 

export const ProductActionWrapper=styled(Box,{
  shouldForwardProp:prop=>prop!=='show'
})(({show,theme})=>({
  [theme.breakpoints.up('md')]:{
    display:show ? 'visible':'none',
    position:'absolute',
    right:0,
    top:'25%'
  }
}))