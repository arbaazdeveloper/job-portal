import { Dialog } from '@headlessui/react';
import React from 'react'

const Form1 = () => {
  const [step, setStep] = React.useState(1);
  const handleChange = (e) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data processing here
   
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const inputStyle='border border-gray-300 p-input-padding rounded-sm outline-none font-poppins placeholder-[#7A7A7A] w-full'
 

  return (
    <>
    {step===1?<>
      <Dialog.Title as="div"className="text-lg flex justify-between w-full font-poppins leading-6 text-gray-900" >
                    <h3>Create Job</h3>
                    <h3>Step 1</h3>
                  </Dialog.Title>
    <form className='flex flex-col w-full mt-24px'>
      <div className='w-full'>
      <label htmlFor='job-title' className='flex flex-start text-[#212121] font-poppins my-sm'>Job Title<strong style={{color:'red'}}>*</strong></label>
      <input name='job-title' id='job-title' className={inputStyle} placeholder='ex. Ux Ui Designer' />
      </div>
      <div className='w-full mt-24px'>
      <label htmlFor='job-title' className='flex flex-start text-[#212121] font-poppins my-sm'>Company-name<strong style={{color:'red'}}>*</strong></label>
      <input name='company-name' id='company-name' className={inputStyle} placeholder='ex. Google' />
      </div>

      <div className='w-full mt-24px'>
      <label htmlFor='industry' className='flex flex-start text-[#212121] font-poppins my-sm'>Industry<strong style={{color:'red'}}>*</strong></label>
      <input name='industry' id='job-title' className={inputStyle} placeholder='ex. Information Technology' />
      </div>

      <div className='w-full flex justify-between mt-24px'>
      <div>
      <label htmlFor='location' className='flex flex-start text-[#212121] font-poppins my-sm'>Location<strong style={{color:'red'}}>*</strong></label>
      <input name='location' id='location' className={inputStyle} placeholder='ex. Ux Ui Designer' />
      </div>
     <div>

      <label htmlFor='job-title' className='flex flex-start text-[#212121] font-poppins my-sm'>Remote Type<strong style={{color:'red'}}>*</strong></label>
      <input name='remote-type' id='remote-type' className={inputStyle} placeholder='ex. in-office' />
     </div>
      </div>


<div className='w-full flex flex-start'>
      <button className='flex  flex-row h-custom-btn-height w-custom-btn-width justify-center items-center p-2 bg-[#1597E4] rounded-m flex-none m-custom-margin-top  border-none font-poppins font-medium text-white cursor-pointer' onClick={handleNextStep}>Next</button>
</div>
    </form>

    </>:<>
    <Dialog.Title as="div"className="text-lg flex justify-between w-full font-poppins leading-6 text-gray-900" >
                    <h3>Create Job</h3>
                    <h3>Step 2</h3>
                  </Dialog.Title>
    <form className='flex flex-col w-full mt-24px'>
      <label htmlFor='location' className='flex flex-start text-[#212121] font-poppins my-sm mt-24px'>Experience</label>
    <div className='w-full flex justify-between '>
      <div>
      <input name='experience' id='experience' className={inputStyle} placeholder='Maximum' />
      </div>
     <div>
      <input name='minimum' id='job-title' className={inputStyle} placeholder='Minimum' />
     </div>
      </div>
      <label htmlFor='location' className='flex flex-start text-[#212121] font-poppins my-sm mt-24px'>Salary</label>
      <div className='w-full flex justify-between '>
      <div>
      <input name='location' id='location' className={inputStyle} placeholder='Maximum' />
      </div>
     <div>
      <input name='job-title' id='job-title' className={inputStyle} placeholder='Minimum' />
     </div>
      </div>
      <div className='w-full mt-24px'>
      <label htmlFor='job-title' className='flex flex-start text-[#212121] font-poppins my-sm'>Total Employee<strong style={{color:'red'}}>*</strong></label>
      <input name='company-name' id='company-name' className={inputStyle} placeholder='ex. Google' />
      </div>
      <div className='w-full mt-24px'>
      <label htmlFor='job-title' className='flex flex-start text-[#212121] font-poppins my-sm'>Apply Type<strong style={{color:'red'}}>*</strong></label>
      <input name='company-name' type='radio' id='company-name' className={inputStyle} placeholder='ex. Google' />
      </div>
    </form>
    
    
    </>}
  
     

    </>
  )
}

export default Form1