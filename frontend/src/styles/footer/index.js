import {styled} from "@mui/system";
import { TextField, Typography } from "@mui/material";
import { color } from "../theme";

export const FooterTitle=styled(Typography)(()=>({
  marginBottom:'1em',
  textTransform:'uppercase'
}))

export const SubtitleTF=styled(TextField)(()=>({
  '.MuiInputLabel-root':{
    color:color.secondary
  },
  '.MuiInputLabel-root::after':{
    color:color.secondary
  },
  '.MuiInput-root::before':{
    borderBottom:`1px solid ${color.secondary}`
  },
  '.MuiInput-root::after':{
    borderBottom:`1px solid ${color.secondary}`
  },
}))