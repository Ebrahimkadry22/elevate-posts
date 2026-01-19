import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../common/Header'

const Mainlayouts = () => {
  return (
    <div >
      <Header />
        <Outlet />
    </div>
  )
}

export default Mainlayouts