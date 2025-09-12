import React from 'react'

const Footer = () => {
  return (
    <footer className="footer border border-[33353F] text-white border-l-transparent border-r-transparent border-b-transparent">
      <div className='container p-2 md:p-4 flex justify-between'>
        <span><img
                src='/images/logo.png'
                alt='Logo'
                className='w-17 md:w-20 h-auto md:ml-10'
                />
        </span>
        <p>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer