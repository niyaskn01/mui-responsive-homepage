import { IconButton, Slide } from '@mui/material'
import React from 'react'
import { SearchBoxContainer, SearchField } from '../../styles/search'
import { useUIContext } from '../../context'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBox() {
  const {showSearchBox,setShowSearchBox}=useUIContext()
  return (
    <Slide direction='down' in={showSearchBox} timeout={600}>
      <SearchBoxContainer>
        <SearchField
          placeholder='Search...'
          fullWidth
          color='secondary'
          variant='standard'
        />
        <IconButton>
        <SearchIcon
          sx={{fontSize:{xs:'2rem',md:'3rem'}}}
        />
        </IconButton>
        <IconButton
          sx={{position:'absolute' ,top:30,right:10}}
          onClick={()=>setShowSearchBox(false)}
        >
          <CloseIcon
            sx={{fontSize:'4rem'}}
          />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  )
}

export default SearchBox