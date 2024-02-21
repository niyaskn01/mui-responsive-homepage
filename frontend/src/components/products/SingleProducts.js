import React from 'react'
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../styles/products'
import ProductMeta from './ProductMeta'
import { Stack } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';

function SingleProducts({product,matches}) {
  return (
    <>
    <Product>
      <ProductImage src={product.image}/>
      <ProductMeta product={product} matches={matches}/>
      <ProductActionWrapper>
        <Stack direction='row'>
          <ProductFavButton isFav={1}>
            <FavoriteIcon/>
          </ProductFavButton>
          <ProductActionButton>
            <ShareIcon/>
          </ProductActionButton>
          <ProductActionButton>
            <FitScreenIcon/>
          </ProductActionButton>
        </Stack>
      </ProductActionWrapper>
    </Product>
    <ProductAddToCart variant='contained'>Add To Cart</ProductAddToCart>
    </>
  )
}

export default SingleProducts