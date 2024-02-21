import React from 'react'
import { ProductMetaWrapper } from '../../styles/products'
import { Typography } from '@mui/material'

function ProductMeta({product,matches}) {
  return (
    <ProductMetaWrapper>
      <Typography variant={matches ? 'h6' : 'h5'}>
        {product.name}
      </Typography>
      <Typography variant={matches ? 'caption' : 'body1'} lineHeight={2}>
        {product.price}
      </Typography>
    </ProductMetaWrapper>
  )
}

export default ProductMeta