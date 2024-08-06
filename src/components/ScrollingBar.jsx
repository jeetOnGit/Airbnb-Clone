import React, { useState } from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function ScrollingBar() {
  const scrollingOptions = [
    { icon: <i className="fa-solid fa-ticket" />, name: 'Icons' },
    { icon: <i className="fa-solid fa-water-ladder" />, name: 'Amazing pools' },
    { icon: <i className="fa-solid fa-wheat-awn" />, name: 'Farms' },
    { icon: <i className="fa-solid fa-mountain" />, name: 'Top of the world' },
    { icon: <i className="fa-solid fa-bed" />, name: 'Rooms' },
    { icon: <i className="fa-solid fa-bell-concierge" />, name: 'Luxe' },
    { icon: <i className="fa-solid fa-image" />, name: 'Amazing views' },
    { icon: <i className="fa-solid fa-umbrella-beach" />, name: 'Beachfront' },
    { icon: <i className="fa-solid fa-house" />, name: 'Treehouses' },
    { icon: <i className="fa-solid fa-meteor" />, name: 'OMG!' },
    { icon: <i className="fa-solid fa-gopuram" />, name: 'Top cities' },
    { icon: <i className="fa-solid fa-fire" />, name: 'Trending' },
    { icon: <i className="fa-solid fa-dungeon" />, name: 'Mansions' },
    { icon: <i className="fa-solid fa-tractor" />, name: 'Countryside' },
    { icon: <i className="fa-solid fa-igloo" />, name: 'Earth homes' },
    { icon: <i className="fa-solid fa-bowling-ball" />, name: 'Play' },
    { icon: <i className="fa-solid fa-dungeon" />, name: 'Tiny homes' },
    { icon: <i className="fa-solid fa-dungeon" />, name: 'Castles' },
    { icon: <i className="fa-solid fa-meteor" />, name: 'Tropical' },
    { icon: <i className="fa-solid fa-tractor" />, name: 'Lakefront' },
    { icon: <i className="fa-solid fa-bed" />, name: 'Cabins' },
    { icon: <i className="fa-solid fa-house" />, name: 'Islands' },
    { icon: <i className="fa-solid fa-umbrella-beach" />, name: 'National park' },
  ]


  const [activeIndex, setActiveIndex] = useState(0);

  const activeFilter = (index) => {
    setActiveIndex(index);
  };

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <div className='border-t py-5 mt-9 shadow-[rgb(0_0_0/16%)_0_0]'>
      <div className='myContainer mx-auto overflow-scroll scrollWrapper'>
        {/* <Slider {...settings}>   */}
      <div className='flex justify-between gap-10 w-max overflow-scroll scrollBar'>
        {
          scrollingOptions.map((item, index) => (
            
              <ul key={index} className={`text-center flex flex-col text-[#6a6a6a] cursor-pointer ${activeIndex === index && 'text-[#000] border-b-2 border-[#000] pb-2'}`} onClick={()=>activeFilter(index)}>  
                  <li className='text-[25px]'>{item.icon}</li>
                  <li className='text-[12px]'>{item.name}</li>
              </ul>
            
          ))
        }
      </div>
        {/* </Slider> */}

    </div>
    </div>
  )
}

export default ScrollingBar