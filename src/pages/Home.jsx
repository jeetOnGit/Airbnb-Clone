import React, { useState } from 'react'
import '../App.css'

function Home() {
  const gateWays = ["Popular", "Arts & culture", "Outdoor", "Mountains", "Beach", "Unique stays", "Categories", "Things to do"]

  const [activeGateway, setActiveGatway] = useState(0)

  const currGateway = (index) =>{
    setActiveGatway(index)
  }

  return (
    <main className=''>
      
      <div className='myContainer mx-auto px-4 pt-8 '>
        <section className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 gap-y-5 text-[#6a6a6a]'>
          <div className='event flex flex-col relative'>
            <button className='absolute bg-black px-4 py-3 right-3 top-3 rounded-full text-white'>
              <i className="fa-solid fa-arrow-up-from-bracket " />
            </button>
            <img className='rounded-2xl mb-3' src="https://placehold.co/300x350" alt="" />
            <p className='text-[#000]'>Go VIP with Kevin Hart</p>
            <p>Hosted by Kevin Hart</p>
            <p className='text-[#000] font-medium'>Coming 21 August</p>
          </div>

          <div className='event flex flex-col relative'>
            <button className='absolute bg-black px-4 py-3 right-3 top-3 rounded-full text-white'>
            <i className="fa-solid fa-arrow-up-from-bracket " />
            </button>

            <img className='rounded-2xl mb-3' src="https://placehold.co/300x350" alt="" />
            <p className='text-[#000]'>Go VIP with Kevin Hart</p>
            <p>Hosted by Kevin Hart</p>
            <p className='text-[#000] font-medium'>Coming 21 August</p>
          </div>

          <div className='event flex flex-col relative'>
            <button className='absolute bg-black px-4 py-3 right-3 top-3 rounded-full text-white'>
              <i className="fa-solid fa-arrow-up-from-bracket " />
            </button>

            <img className='rounded-2xl mb-3' src="https://placehold.co/300x350" alt="" />
            <p className='text-[#000]'>Go VIP with Kevin Hart</p>
            <p>Hosted by Kevin Hart</p>
            <p className='text-[#000] font-medium'>Coming 21 August</p>
          </div>

          <div className='event flex flex-col relative'>
            <button className='absolute bg-black px-4 py-3 right-3 top-3 rounded-full text-white'>
              <i className="fa-solid fa-arrow-up-from-bracket " />
            </button>

            <img className='rounded-2xl mb-3' src="https://placehold.co/300x350" alt="" />
            <p className='text-[#000]'>Go VIP with Kevin Hart</p>
            <p>Hosted by Kevin Hart</p>
            <p className='text-[#000] font-medium'>Coming 21 August</p>
          </div>

          <div className='event flex flex-col relative'>
            <button className='absolute bg-black px-4 py-3 right-3 top-3 rounded-full text-white'>
              <i className="fa-solid fa-arrow-up-from-bracket " />
            </button>

            <img className='rounded-2xl mb-3' src="https://placehold.co/300x350" alt="" />
            <p className='text-[#000]'>Go VIP with Kevin Hart</p>
            <p>Hosted by Kevin Hart</p>
            <p className='text-[#000] font-medium'>Coming 21 August</p>
          </div>
          
          <div className='event flex flex-col relative'>
            <button className='absolute bg-black px-4 py-3 right-3 top-3 rounded-full text-white'>
              <i className="fa-solid fa-arrow-up-from-bracket " />
            </button>
            
            <img className='rounded-2xl mb-3' src="https://placehold.co/300x350" alt="" />
            <p className='text-[#000]'>Go VIP with Kevin Hart</p>
            <p>Hosted by Kevin Hart</p>
            <p className='text-[#000] font-medium'>Coming 21 August</p>
          </div>
        </section>

      </div>

      <section className='py-4 bg-[#F7F7F7] mt-9 max-md:px-4'>
          <div className="myContainer mx-auto">
            <h3 className='text-[1.5rem] font-semibold'>Inspiration for future getaways</h3>

            <ul className='flex justify-start gap-5 py-6 max-md:overflow-scroll scrollWrapper'>
            {
              gateWays.map((gateway, index) => (
                
                  <li className={`text-[#6A6A6A] cursor-pointer ${activeGateway === index && "text-black border-b-2 border-[#000] font-medium"}`} onClick={()=>currGateway(index)}>{gateway}</li>
              
              ))
            }
            </ul>


           
            {
              activeGateway === 0 && 
              <div className='peopleTab grid grid-cols-6 gap-3 max-md:grid-cols-4 max-sm:grid-cols-2'>
              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Canmore</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem]  font-medium'>Canmore</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem]  font-medium'>Canmore</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem]  font-medium'>Canmore</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem]  font-medium'>Canmore</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem]  font-medium'>Canmore</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem]  font-medium'>Canmore</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem]  font-medium'>Canmore</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem]  font-medium'>Canmore</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem]  font-medium'>Canmore</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem]  font-medium'>Canmore</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>
              <div className="option">
                <p className='text-black text-[0.9rem]  font-medium'>Canmore</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>
              
              
              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Canmore</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>
              </div>
            }

            

            {
              activeGateway === 1 && 
              <div className='ArtsTab grid grid-cols-6 gap-3 max-md:grid-cols-4 max-sm:grid-cols-2'>
              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Phonix</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Phonix</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Phonix</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Phonix</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Phonix</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Phonix</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Phonix</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Phonix</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Phonix</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Phonix</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>

              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Phonix</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>
              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Phonix</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>
              
              
              <div className="option">
                <p className='text-black text-[0.9rem] font-medium'>Phonix</p>
                <p className='text-[#6a6a6a] text-[0.9rem]'>Holiday rentals</p>
              </div>
              </div>
            }

          </div>
      </section>
    </main>
  )
}

export default Home