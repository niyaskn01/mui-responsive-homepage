import React, { useEffect, useState } from 'react'
import { MessageText, PromotionContainer } from '../../styles/promotions'
import { Box, Slide } from '@mui/material'
const messages=[
  '20% off on your first order',
  'summer sale starts now,visit our websites or nearest store',
  "don't miss out! limited time offer",
]

export default function Promotions() {
  const [messageIndex, setMessageIndex] = useState(0)
  const [show,setShow]=useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessageIndex(i => (i + 1) % messages.length)
      setShow(true)
      setTimeout(()=>{
        setShow(false);
      },3000) 
    }, 4000)

    

    return () => clearInterval(intervalId)
  }, [])

  return (
    <PromotionContainer>
      <Slide
      in={show}
      direction={show?"left":'right'}
      timeout={{
        enter:500,
        exit:100
      }}
      >
      <Box display='flex' justifyContent='center' alignItems='center'>
        <MessageText>{messages[messageIndex]}</MessageText>
      </Box>
      </Slide>
    </PromotionContainer>
  )
}

