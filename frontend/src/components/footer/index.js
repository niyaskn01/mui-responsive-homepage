import { Box, Button, Grid, List, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { FooterTitle, SubtitleTF } from '../../styles/footer'
import { color } from '../../styles/theme/index'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import SendIcon from '@mui/icons-material/Send';

function Footer() {
  return (
    <Box
      sx={{
        background: color.footerBlack,
        color: '#fff',
        p: { xs: 4, md: 10 },
        pt: 12, pb: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={2} justifyContent='center'>
        <Grid item lg={4} md={6}>
          <FooterTitle variant='body1'>
            about
          </FooterTitle>
          <Typography variant='body2'>
            simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make
            a type specimen book
          </Typography>
          <Box
            sx={{mt:4,color:color.grape}}
          >
            <InstagramIcon sx={{mr:1}}/>
            <FacebookIcon sx={{mr:1}}/>
            <XIcon sx={{mr:1}}/>
            <LinkedInIcon/>
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant='body1'>information</FooterTitle>
          <List>
            <ListItemText>
              <Typography variant='body2' lineHeight={2}>About Us</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant='body2' lineHeight={2}>Privacy &amp; Policy</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant='body2' lineHeight={2}>Order Tracking</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant='body2' lineHeight={2}>Terms &amp; Conditions</Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant='body1'>my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography variant='body2' lineHeight={2}>Login</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant='body2' lineHeight={2}>Cart</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant='body2' lineHeight={2}>My account</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant='body2' lineHeight={2}>Wishlist</Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant='body1'>
            newsletter
          </FooterTitle>
          <Stack>
            <SubtitleTF variant='standard' label='email address'/>
            <Button
            sx={{mb:4,mt:4}}
              variant='contained'
              startIcon={<SendIcon/>}
            >Subscribe</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer