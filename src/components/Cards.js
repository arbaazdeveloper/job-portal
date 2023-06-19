import React from 'react'
import image from '../public/job-image.png'
import Button from './Button'
import Edit from './Edit'
import Delete from './Delete'

const Cards = (props) => {
  const {id,title,industry,company,location,experienceMinimum,experienceMaximum,employee,salaryMinimum,salaryMaximum,type,applyType}=props
  return (
    <div className='box-border flex flex-col items-start p-4 gap-4 w-830 h-320 left-998.12 bg-white border border-gray-300 rounded-lg p-custom-padding'>
    
        <div className='flex w-full'>
            <div>
            <img src={image} alt='img'/>
            </div>
            <div className='flex justify-between w-full'>

     
            <div className='ml-8'>
                <p className='font-poppins  text-[#212121] font-normal text-custom-size'>{title}</p>
                <p className='font-poppins text-base font-normal leading-6 tracking-normal text-left'>{company}-{industry}</p>
                <p className='text-[#646464] font-poppins font-normal text-base leading-6'>{location} {type}</p>
                <div className='mt-2'>
                    <p className=' font-poppins m-custom-margin-top  text-[#212427] leading-6 text-info-size'>Part time (9am - 5pm IST)</p>
                    <p className=' font-poppins m-custom-top-spacing  text-[#212427] text-info-size'>{`Experience (${experienceMinimum}-${experienceMaximum})`}</p>
                    <p className=' font-poppins m-custom-top-spacing text-[#212427] text-info-size'>INR (r){`${salaryMinimum}-${salaryMaximum}`} / Month</p>
                    <p className=' font-poppins m-custom-top-spacing text-[#212427] text-info-size'>{employee} Employee</p>
                </div>
             
             {applyType==='quickApply'?<Button text='Apply Now' width='w-custom-btn-width' />:<button className='text-[#00A1FF] font-poppins m-custom-margin-top  w-147px border border-[#00A1FF] p-btn-padding rounded-sm'>External Apply</button>}
             
             
            
            </div>
            <div>
          <Edit data={props}/>
          <Delete id={id}/>
          </div>
            </div>
        </div>
        
    </div>
  )
}

export default Cards