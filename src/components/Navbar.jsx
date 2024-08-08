import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import '../App.css'
import Language from './Language'
import ScrollingBar from './ScrollingBar'

function Navbar() {
  const [active, setActive] = useState("Stays")
  const [showBox, setShowBox] = useState(false)
  const [showLang, setShowLang] = useState(false)
  const activeTab = (currectTab) =>{
    setActive(currectTab)
  }
  return (
    <>

      <header className='max-sm:z-10 bg-white relative z-20'>
        <div className='myContainer mx-auto pt-4 max-xl:px-3 max-md:pt-0'>
          <nav className='flex justify-between items-center max-md:hidden'>
            <div className="logo text-[#FF385C]">
              <Link to='/' className='flex justify-between items-baseline font-semibold text-[25px]'>
                <i className="fa-brands fa-airbnb font-medium me-1 mt-1 text-[37px]" />
                <h6 className='max-xl:hidden'>airbnb</h6>
              </Link>
            </div>

            <div className="tabs ms-[12%]">
                <ul className="tabs flex justify-between gap-[30px] cursor-pointer">
                  <li className={`${active === 'Stays' && 'active'}`} onClick={() => activeTab('Stays')}>Stays</li>
                  <li className={`${active === 'Experiences' && 'active'}`} onClick={() => activeTab('Experiences')}>Experiences</li>
                </ul>
            </div>

            <div>
              <ul className='flex justify-between gap-2 items-center'>
                <li><Link to='/airbnbYourRoom' className='hover:bg-[#f7f7f7] py-2 px-2 rounded-full text-[#222] font-medium'>Airbnb your home</Link></li>
                <li><button className='hover:bg-[#f7f7f7] py-1 px-2 rounded-full' onClick={()=>setShowLang(!showLang)}><Link to='/' ><i className="fa-solid fa-globe" /></Link></button></li>
                <li>
                  <div className='userAuth flex justify-between items-center border border-[#ddd] py-1 px-2 gap-5 rounded-full hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] cursor-pointer relative' onClick={()=> setShowBox(!showBox)}>
                    <i className="fa-solid fa-bars text-[18px]" />
                    <i className="fa-solid fa-user text-white bg-[#6A6A6A] rounded-full p-2" />
                    {
                      showBox === true && <ul className="popup absolute bg-[#FFF] w-[250px] border leading-8 top-[110%] right-0 z-10 rounded-lg text-[14px]" >
                      <li className='font-medium hover:bg-[#c5c5c51f] p-2'><Link to='/'>Sign up</Link></li>
                      <li className='border-b hover:bg-[#c5c5c51f] p-2'><Link to='/'>Login</Link></li>
                      <li className='hover:bg-[#c5c5c51f] p-2'><Link to='/airbnbYourRoom '><Link to='/'>Airbnb your room</Link></Link></li>
                      <li className='hover:bg-[#c5c5c51f] p-2'><Link to='/'>Help Center</Link></li>
                    </ul> 
                    }
                    
                  </div>
                  
                </li>
              </ul>
            </div>
          </nav>

          <div className='border-[#ddd] lg:w-[850px] shadow-[0_3px_12px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.08)] px-6 py-3 rounded-full mx-auto mt-4 relative'>
            <ul className='flex justify-between border-[#ddd] max-sm:w-full max-md:hidden'>
              <li className='basis-1/3 pr-3'>
                <ul className=' border-r-[#6a6a6a] border-r'>
                  <li className='text-[12px] font-medium'>Where</li>
                  <li className='text-[14px]'><input type="text" placeholder='Search destinations' className='focus:outline-0' /></li>
                </ul>
              </li>

              {
                active === "Stays" && <ul className='flex justify-start border-[#ddd]'>
              <li className='basis-1/4 pr-3 max-sm:basis-0'>
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
                  <li className='basis-2/3 border-r-[#6a6a6a] border-r mr-3 max-sm:basis-0'>
                <ul>
                  <li className='text-[12px] font-medium'>Date</li>
                  <li className='text-[14px]'><input type="text" placeholder='Add dates' className='focus:outline-0' /></li>
                </ul>
              </li>
                  </ul>
                  }

             

              <li className='basis-1/3 max-sm:basis-0'>
                <ul>
                  <li className='text-[12px] font-medium'>Who</li>
                  <li className='text-[14px]'><input type="text" placeholder='Add guests' className='focus:outline-0' /></li>
                </ul>
              </li>
            </ul>

            <div className='text-[0.9rem] ms-8 md:hidden'>
              <button className='text-start'>
                <Link to='/'>
                  <p className='font-medium'>Where to?</p>
                  <p className='text-[#6a6a6a]'>Anywhere • Anyweek • Add guests</p>
                </Link>
              </button>
            </div>
            
            <button className='absolute bg-[#FF385C] text-white py-3 px-4 rounded-full md:right-2 top-2 hover:bg-[#E31C5A] max-md:bg-transparent max-md:text-black max-md:left-[1%] max-md:text-[1.3rem] max-md:right max-md:hover:bg-white'>
            <i className="fa-solid fa-magnifying-glass " />
            </button>

            
          </div>


        </div>
        {showLang && <Language onClose={()=>setShowLang(false)}/>}
        <ScrollingBar />
        
      </header>
    </>
  )
}

export default Navbar