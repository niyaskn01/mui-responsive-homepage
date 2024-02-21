import React, { useState } from 'react'
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../styles/products'
import ProductMeta from './ProductMeta'
import { Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';

function SingleProductsDesktop({product,matches}) {
  const [showOptions,setShowOptions]=useState(false)

  const handleMouseEnter=()=>{
    setShowOptions(true)
  }
  const handleMouseLeave=()=>{
    setShowOptions(false)
  }
  return (
    <>
    <Product 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    showOptions={showOptions}
    >
      <ProductImage src={product.image}/>
      <ProductFavButton isFav={1}>
            <FavoriteIcon/>
          </ProductFavButton>
          {showOptions && 
          <ProductAddToCart variant='contained'>Add To Cart</ProductAddToCart>}
      
      <ProductActionWrapper show={showOptions}>
        <Stack direction='column'>
          <ProductActionButton>
            <ShareIcon/>
          </ProductActionButton>
          <ProductActionButton>
            <FitScreenIcon/>
          </ProductActionButton>
        </Stack>
      </ProductActionWrapper>
    </Product>
    <ProductMeta product={product} matches={matches}/>
    </>
  )
}

export default SingleProductsDesktop