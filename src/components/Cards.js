import React from 'react'
import image from '../public/job-image.png'
const Cards = () => {
  return (
    <div className='box-border flex flex-col items-start p-4 gap-4 w-830 h-320 left-998.12 bg-white border border-gray-300 rounded-lg p-custom-padding'>
        <div className='flex'>
            <div>
            <img src={image} alt='img'/>
            </div>
            <div className='ml-8'>
                <p className='font-poppins  text-[#212121] font-normal text-custom-size'>UI UX Designer</p>
                <p className='font-poppins text-base font-normal leading-6 tracking-normal text-left'>Great vibes-information technology</p>
                <p className='text-[#646464] font-poppins font-normal text-base leading-6'>Chennai Tamilnadu, India in office</p>
                <div className='mt-2'>
                    <p className=' font-poppins m-custom-margin-top  text-[#212427] leading-6 text-info-size'>Part time (9am - 5pm IST)</p>
                    <p className=' font-poppins m-custom-top-spacing  text-[#212427] text-info-size'>Experience (1-2 years)</p>
                    <p className=' font-poppins m-custom-top-spacing text-[#212427] text-info-size'>INR (r) 30,000-50,000 / Month</p>
                    <p className=' font-poppins m-custom-top-spacing text-[#212427] text-info-size'>51-200 Employee</p>

                </div>
<button className='flex mt-5 flex-row h-custom-btn-height w-custom-btn-width justify-center items-center p-2 bg-[#1597E4] rounded-m flex-none m-custom-margin-top  border-none font-poppins font-medium text-white cursor-pointer'>Apply now</button>
            </div>
        </div>
    </div>
  )
}

export default Cards