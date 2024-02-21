import { Container, Grid, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import {products} from '../../data/index'
import SingleProducts from './SingleProducts'
import SingleProductsDesktop from './SingleProductDesktop'

function Products() {
  const theme=useTheme()
  const matches=useMediaQuery(theme.breakpoints.down('md'))

  const renderProducts=products.map((product)=>(
    <Grid 
    key={product.id}
    item  xs={6} md={4} lg={3}
    display='flex'
    flexDirection='column'
    alignItems="center"
    >
      {
        matches ? <SingleProducts product={product} matches={matches} />
        :
        <SingleProductsDesktop product={product} matches={matches} />
      }
      
    </Grid>
  ))
  return (
    <Container>
      <Grid container justifyContent={'center'}
      spacing={{xs:2,md:4}}
      sx={{margin:'10px 4px 20px 4px'}}
      >
        {renderProducts}
      </Grid>
    </Container>
  )
}

export default Products