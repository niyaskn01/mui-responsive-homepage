import { createTheme, lighten } from "@mui/material";

export const color={
  primary:"#673c6b",
  secondary:'#fff',
  grape:'#e8d5e1',
  lightGrape:'#cc72b4',
  gray:'#8b998f',
  iconOrange:'#f0d8bd',
  white:'#fff',
  footerBlack:'#4f4e4b',
  drawerColor:'#614663'
}

const theme=createTheme({
  palette:{
    primary: {
      main:color.primary
    },
    secondary:{
      main:color.secondary
    },
    gray:{
      main:color.gray
    },
    iconOrange:{
      main:color.iconOrange
    },
    grape:{
      main:color.grape,
    },
    lightGrape:{
      main:color.lightGrape
    },
    white:{
      main:color.white
    }
  },
  components:{
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation:true
      }
    },
    MuiDrawer:{
      styleOverrides:{
        paper:{
          width:250,
          background:color.drawerColor,
          color:color.white,
          border:`1px solid ${color.secondary}`,
          borderRadius:'0px 100px 0px 0px'
        }
      }
    },
    MuiDivider:{
      styleOverrides:{
        root:{
          borderColor:lighten(color.gray,0.5)
        }
      }
    }
  }
})

export default theme