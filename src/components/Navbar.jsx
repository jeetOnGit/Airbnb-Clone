import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import '../App.css'

function Navbar() {
  const [active, setActive] = useState("Stays")

  const activeTab = (currectTab) =>{
    setActive(currectTab)
  }
  return (
    <>

      <header>
        <div className='myContainer mx-auto pt-4 max-xl:px-3'>
          <nav className='flex justify-between items-center'>
            <div className="logo text-[#FF385C]">
              <Link className='flex justify-between items-baseline font-semibold text-[25px]'>
                <i className="fa-brands fa-airbnb font-medium me-1 mt-1 text-[37px]" />
                <h6 className='max-xl:hidden'>airbnb</h6>
              </Link>
            </div>

            <div className="tabs ms-[12%]">
                <ul className="tabs flex justify-between gap-[30px]">
                  <li  className={`${active === 'Stays' && 'active'}`} onClick={() => activeTab('Stays')}><Link to='/'>Stays</Link></li>
                  <li className={`${active === 'Experiences' && 'active'}`} onClick={() => activeTab('Experiences')}><Link to='/'>Experiences</Link></li>
                </ul>
            </div>

            <div>
              <ul className='flex justify-between gap-2 items-center'>
                <li><Link to='/' className='hover:bg-[#f7f7f7] py-2 px-2 rounded-full text-[#222] font-medium'>Airbnb your home</Link></li>
                <li><Link to='/' className='hover:bg-[#f7f7f7] py-1 px-2 rounded-full'><i className="fa-solid fa-globe" /></Link></li>
                <li>
                  <Link className='flex justify-between items-center border border-[#ddd] py-1 px-2 gap-5 rounded-full hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)]'>
                    <i className="fa-solid fa-bars text-[18px]" />
                    <i className="fa-solid fa-user text-white bg-[#6A6A6A] rounded-full p-2" />
                  </Link>
                  
                </li>
              </ul>
            </div>
          </nav>

          <div className='border-[#ddd] w-[850px] shadow-[0_3px_12px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.08)] px-6 py-3 rounded-full mx-auto mt-4 relative'>
            <ul className='flex justify-start border-[#ddd]'>
              <li className='basis-1/3 pr-3'>
                <ul className=' border-r-[#6a6a6a] border-r'>
                  <li className='text-[12px] font-medium'>Where</li>
                  <li className='text-[14px]'><input type="text" placeholder='Search destinations' className='focus:outline-0' /></li>
                </ul>
              </li>

              {
                active === "Stays" && <ul className='flex justify-start border-[#ddd]'>
              <li className='basis-1/4 pr-3'>
                  <ul className='border-r-[#6a6a6a] border-r'>
                    <li className='text-[12px] font-medium'>Check in</li>
                    <li className='text-[14px]'><input type="text" placeholder='Add dates' className='focus:outline-0' /></li>
                  </ul>
              </li>

              <li className='basis-1/4 pr-3'>
                <ul className='border-r-[#6a6a6a] border-r'>
                  <li className='text-[12px] font-medium'>Check out</li>
                  <li className='text-[14px]'><input type="text" placeholder='Add dates' className='focus:outline-0' /></li>
                </ul>
              </li> 
                </ul>
                
              }

              {
                active === "Experiences" && <ul className='flex justify-start border-[#ddd]'>
                  <li className='basis-1/3 border-r-[#6a6a6a] border-r mr-3'>
                <ul>
                  <li className='text-[12px] font-medium '>Date</li>
                  <li className='text-[14px]'><input type="text" placeholder='Add dates' className='focus:outline-0' /></li>
                </ul>
              </li>
                  </ul>
                  }

              <li className='basis-1/3'>
                <ul>
                  <li className='text-[12px] font-medium'>Who</li>
                  <li className='text-[14px]'><input type="text" placeholder='Add guests' className='focus:outline-0' /></li>
                </ul>
              </li>
            </ul>

            <i className="fa-solid fa-magnifying-glass absolute bg-[#FF385C] text-white p-4 rounded-full right-2 top-2 cursor-pointer hover:bg-[#E31C5A]" />
          </div>
        </div>

      </header>
    </>
  )
}

export default Navbar