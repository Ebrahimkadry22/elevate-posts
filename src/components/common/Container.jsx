import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='mx-auto  w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 overflow-hidden'>
        {children}
    </div>
  )
}

export default React.memo(Container)