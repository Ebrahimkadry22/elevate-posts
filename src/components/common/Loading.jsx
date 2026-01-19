import React from 'react'
import { FallingLines } from 'react-loader-spinner'
import Container from './Container'

const Loading = () => {
  return (
    <Container >
    <div className='flex items-center justify-center h-48'>
        <FallingLines 
color="#bec9bd"
width="100"
visible={true}
ariaLabel="falling-circles-loading"
/>
    </div>
</Container>
  )
}

export default React.memo(Loading)