import Link from 'next/link'
import React from 'react'

function Header() {

  return (
   <div className='header'>
        <Link className="Link" href="/" id='icon'>𝚣𝔦𝖊𝓭 𝑍ā𝓱𝚛ῖ</Link>
        <div className='navbar'>
            <Link className="Link" href='/' >Home</Link>
            <Link className="Link" href='/about' >About</Link>
            <Link className="Link" href='/projects' >Projects</Link>
            
        </div>
    </div>  
  )
}

export default Header