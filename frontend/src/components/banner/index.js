import { Typography } from '@mui/material'
import React from 'react'
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../../styles/banner'

function Banner() {
  return (
    <BannerContainer>
      <BannerImage src='/images/banner/shopping.avif'/>
      <BannerContent>
        <Typography variant='h6'> 
          Huge Collection
        </Typography>
        <BannerTitle variant='h2'>
          New Bags
        </BannerTitle>
        <BannerDescription variant='subtitle1'>
          Up to 50% off on selected items. Limited time offer!
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  )
}

export default Banner