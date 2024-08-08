import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-[#f7f7f7] py-4 border border-t'>
      <div className='myContainer mx-auto'>
        <div className="footerLinks flex justify-start gap-40 text-[#222] text-sm leading-6 max-md:flex-col max-md:px-4 max-md:gap-5">
          <ul>
            <li className='font-medium'>Support</li>
            <li className='hover:underline'><Link to='/'>Help Center</Link></li>
            <li className='hover:underline'><Link to='/'>AirCover</Link></li>
            <li className='hover:underline'><Link to='/'>Anti-discrimination</Link></li>
            <li className='hover:underline'><Link to='/'>Disability support</Link></li>
            <li className='hover:underline'><Link to='/'>Cancellation options</Link></li>
            <li className='hover:underline'><Link to='/'>Report neighbourhood concern</Link></li>
          </ul>

          <ul>
            <li className='font-medium'>Hosting</li>
            <li className='hover:underline'><Link to='/'>Airbnb your home</Link></li>
            <li className='hover:underline'><Link to='/'>AirCover for Hosts</Link></li>
            <li className='hover:underline'><Link to='/'>Hosting resources</Link></li>
            <li className='hover:underline'><Link to='/'>Community forum</Link></li>
            <li className='hover:underline'><Link to='/'>Hosting responsibly</Link></li>
            <li className='hover:underline'><Link to='/'>Join a free Hosting class</Link></li>
          </ul>

          <ul>
            <li className='font-medium'>Airbnb</li>
            <li className='hover:underline'><Link to='/'>Newsroom</Link></li>
            <li className='hover:underline'><Link to='/'>New features</Link></li>
            <li className='hover:underline'><Link to='/'>Careers</Link></li>
            <li className='hover:underline'><Link to='/'>Investors</Link></li>
            <li className='hover:underline'><Link to='/'>Airbnb.org emergency stays</Link></li>
            
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer