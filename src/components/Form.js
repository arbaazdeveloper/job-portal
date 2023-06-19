import { Dialog } from '@headlessui/react';
import React, { useContext, useState } from 'react'
import { Context } from '../context/Context';
import validate from '../services/validation';
import Button from './Button';
import Inputs from './Inputs';
import { postRequest } from '../services/request';

const Form = () => {
  const [step, setStep] = React.useState(1);
  const {formData,setFormData,setIsOpen,showAlert}=useContext(Context)
  const [error,setError]=useState({})
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit =async  (e) => {
    e.preventDefault();
    let err=validate(formData,2)
    if(err.message){
      setError(err)
      return
    }
    setError({})
    let response=await postRequest('jobs',formData)
    if(response.status==='ok'){
      setIsOpen(false)
      showAlert('success','Job created')

      
    }
    if(response.status==='failed'){
      showAlert('Failed','Something went wrong')
      
    }
    setFormData({'job-title':'','remote-type':'','location':'','industry':'','company-name':'','experience-max':'','experience-min':'','salary-min':'','salary-max':'','apply-type':'','total-employee':''})
    
  };

  const handleNextStep = (e) => {
    e.preventDefault()
    let err=validate(formData,1)
    
    if(err.message){
      setError(err)
      return 
    }
    setError({})
    setStep(step + 1);
  };
  const labelStyles='flex flex-start text-[#212121] font-poppins my-sm'
  return (
    <>
      {step === 1 ? <>
        <Dialog.Title as="div" className="text-lg flex justify-between w-full font-poppins leading-6 text-gray-900" >
          <h3>Create Job</h3>
          <h3>Step 1</h3>
        </Dialog.Title>
        <form className='flex flex-col w-full mt-24px'>
          <div className='w-full'>
          <label htmlFor='job-title' className={`flex flex-start text-[#212121] font-poppins my-sm`}>Job Title<strong style={{ color: 'red' }}>*</strong></label>
          <Inputs value={formData['job-title']} placeholder='ex.Ui Ux Designer' onChange={handleChange} name='job-title' hasError={error.title?true:false} error={error}/>
          </div>

          <div className='w-full mt-24px'>
            <label htmlFor='job-title' className={labelStyles}>Company-name<strong style={{ color: 'red' }}>*</strong></label>
            <Inputs value={formData['company-name']} placeholder='ex. Google' onChange={handleChange} name='company-name' hasError={error.company?true:false} error={error}/>
          </div>
          <div className='w-full mt-24px'>
            <label htmlFor='industry' className={labelStyles}>Industry<strong style={{ color: 'red' }}>*</strong></label>
            <Inputs value={formData['industry']} placeholder='ex. Information Technology' onChange={handleChange} name='industry' hasError={error.industry?true:false} error={error}/>
          </div>
          <div className='w-full flex justify-between mt-24px'>
            <div>
              <label htmlFor='location' className={labelStyles}>Location<strong style={{ color: 'red' }}>*</strong></label>
              <Inputs value={formData['location']} placeholder='ex. Chennai' onChange={handleChange} name='location' hasError={error.location?true:false} error={error}/>
            </div>
            <div>
              <label htmlFor='job-title' className={labelStyles}>Remote Type<strong style={{ color: 'red' }}>*</strong></label>
              <Inputs value={formData['remote-type']} placeholder='ex. in-Office' onChange={handleChange} name='remote-type' hasError={error.jobType?true:false} error={error}/>
            </div>
          </div>
          <div className='w-full flex flex- justify-end mt-96px'>
          <Button width='w-custom-btn-width' text='Next' onClick={handleNextStep} />
          </div>
        </form>

      </> : <>
        <Dialog.Title as="div" className="text-lg flex justify-between w-full font-poppins leading-6 text-gray-900" >
          <h3>Create Job</h3>
          <h3>Step 2</h3>
        </Dialog.Title>
        <form className='flex flex-col w-full mt-24px'>
          <label htmlFor='location' className={`flex flex-start text-[#212121] font-poppins my-sm mt-24px`}>Experience</label>
          <div className='w-full flex justify-between '>
            <div>
       
              <Inputs value={formData['experience-min']} placeholder='Minimum' onChange={handleChange} name='experience-min' hasError={error['experience-min']?true:false} error={error}/>
            </div>
            <div>
            <Inputs value={formData['experience-max']} placeholder='Maximum' onChange={handleChange} name='experience-max' hasError={error['experience-max']?true:false} error={error}/>
            </div>
          </div>
          <label htmlFor='location' className={`flex flex-start text-[#212121] font-poppins my-sm mt-24px`}>Salary</label>
          <div className='w-full flex justify-between'>
            <div>
              <Inputs value={formData['salary-min']} placeholder='Minimum' onChange={handleChange} name='salary-min' hasError={error['salary-min']?true:false} error={error}/>
            </div>
            <div>
          
              <Inputs value={formData['salary-max']} placeholder='Maximum' onChange={handleChange} name='salary-max' hasError={error['salary-max']?true:false} error={error}/>
            </div>
          </div>
          <div className='w-full mt-24px'>
            <label htmlFor='job-title' className={`flex flex-start text-[#212121] font-poppins my-sm`}>Total Employee</label>
          
            <Inputs value={formData['total-employee']} placeholder='ex.100' onChange={handleChange} name='total-employee' hasError={error['total-employee']?true:false} error={error}/>
          </div>
          <label htmlFor='location' className={`flex flex-start text-[#212121] font-poppins my-sm mt-24px`}>Apply Type</label>
          <div className=' flex justify-start'>
      <label className="inline-flex items-center">
        <input
          type="radio"
          name="apply-type"
          value="quickApply"
          className="form-radio"
          onChange={handleChange}
        />
        <span className="ml-2 text-placeholder-color font-poppins font-normal">Quick Apply</span>
      </label>

      <label className="inline-flex items-center ml-6">
<input type="radio"name="apply-type"value="externalApply"className="form-radio text-indigo-600" onChange={handleChange}/>
        <span className="ml-2 text-placeholder-color font-poppins">External Apply</span>
      </label>
    </div>
      {error['apply-type']?<><span className='text-error-color flex justify-start'>{error.message}</span></>:''}
          <div className='w-full flex flex- justify-end mt-96px'>
            <Button width='w-custom-btn-width' text='Save' onClick={handleSubmit} />
          </div>
        </form>
      </>
 }



    </>
  )
}

export default Form