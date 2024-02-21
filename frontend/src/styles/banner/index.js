import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { color } from "../theme";


export const BannerContainer=styled(Box)(({theme})=>({
  display:"flex",
  // justifyContent:'center',
  padding:'0px 0px',
  width:'100%',
  height:'100%',
  background:color.grape,
  [theme.breakpoints.down('sm')]:{
    flexDirection:'column',
    alignItems:'center'
  }
}))

export const BannerImage=styled('img')(({src,theme})=>({
  width:'500px',
  src:`url(${src})`,
  [theme.breakpoints.down('md')]:{
    width:'350px'
  },
  [theme.breakpoints.down('sm')]:{
    width:'320px',
    height:'300px'
  }
}))

export const BannerContent=styled(Box)(()=>({
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  maxWidth:420,
  alignItems:'center',
  padding:30
}))

export const BannerTitle=styled(Typography)(({theme})=>({
  fontSize:'72px',
  lineHeight:1.5,
  marginBottom:'20px',
  [theme.breakpoints.down('sm')]:{
    fontSize:'42px'
  }
}))

export const BannerDescription=styled(Typography)(({theme})=>({
  lineHeight:1.25,
  letterSpacing:1.25,
  marginBottom:'3em',
  [theme.breakpoints.down('sm')]:{
    lineHeight:1.15,
  letterSpacing:1.15,
  marginBottom:'1.5em',
  }
}))