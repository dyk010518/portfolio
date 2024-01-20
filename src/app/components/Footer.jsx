import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
     <div className='container p-12 flex justify-between'>
      <span>
        <Image src="/images/horizontal_logo.png" alt="about image" width={200} height={30} />
      </span>
      <p className='text-slate-600'>
        All rights reserved.
      </p>
     </div>
    </footer>
  )
}

export default Footer