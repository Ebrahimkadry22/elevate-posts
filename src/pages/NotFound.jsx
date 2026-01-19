import Container from '@/components/common/Container'
import React from 'react'
import image1 from "../assets/notfound-removebg-preview.png"
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const NotFound = () => {
  return (
    <div className='mt-8'>
      <Container >
        <div className='flex flex-col items-center justify-center gap-4 p-12 overflow-hidden rounded-md bg-white-70 backdrop-blur-md'> 
          <img src={image1} alt="" className='w-full max-w-md'/>
          <h1 className='text-3xl font-bold '>Page Not Found</h1>
          <p className='text-gray-100 '>
            Sorry, the page you are looking for doesn’t exist or has been moved.
          </p>
          {/* back Home */}
          <NavLink to={'/'}>
          <Button variant="secondary"  className='px-10'>Back To Home</Button>
          </NavLink>
        </div>
      </Container>
    </div>
  )
}

export default NotFound