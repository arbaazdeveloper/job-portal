import { Dialog } from '@headlessui/react';
import React, { useContext, useState } from 'react'
import { Context } from '../context/Context';
import validate from '../services/validation';
import Button from './Button';
import Inputs from './Inputs';
import { postRequest, putRequest } from '../services/request';
import Label from './Label';

const Form = () => {
  let schema={ 'job-title': '', 'remote-type': '', 'location': '', 'industry': '', 'company-name': '', 'experience-max': '', 'experience-min': '', 'salary-min': '', 'salary-max': '', 'apply-type': '', 'total-employee': '' }
  const [step, setStep] = React.useState(1);
  const { formData, setFormData, setModalData, showAlert, modalData,allJobs,setJobs } = useContext(Context)
  const [error, setError] = useState({})
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let err = validate(formData, 2)
    if (err.message) {
      setError(err)
      return
    }
    setError({})
    if (modalData.type === 'edit') {
      let response = await putRequest('jobs', formData.id, formData)
      if (response.status === 200) {
        setModalData({ isOpen: false, type: '' })
        showAlert('success', 'Edited succesfully')
        setJobs(allJobs.map((obj)=>{
          if(obj.id===formData.id){
            return response.data
          }
          return obj
        }))
        setFormData(schema)
        return
      }
      else{
        setModalData({ isOpen: false, type: '' })
        showAlert('Failed','Something went wrong! unable to edit')
        return
      }
    }

    let response = await postRequest('jobs', formData)
    if (response.status === 'ok') {
      setModalData({ isOpen: false, type: '' })
      setJobs([...allJobs,response.data])
      showAlert('success', 'Job created')

    }
    if (response.status === 'failed') {
      setModalData({ isOpen: false, type: '' })
      showAlert('Failed', 'Something went wrong! unable to add')

    }
    setFormData(schema)

  };

  const handleNextStep = (e) => {
    e.preventDefault()
    let err = validate(formData, 1)
    if (err.message) {
      setError(err)
      return
    }
    setError({})
    setStep(step + 1);
  };

  return (
    <>
      {step === 1 ? <>
        <Dialog.Title as="div" className="text-lg flex justify-between w-full font-poppins leading-6 text-gray-900" >
          <h3>{modalData.type === 'create' ? 'Create Job' : 'Edit Job'}</h3>
          <h3>Step 1</h3>
        </Dialog.Title>
        <form className='flex flex-col w-full mt-24px'>
          <div className='w-full'>
            <Label name='job-title' title='Job Title' required={true}/>
            <Inputs value={formData['job-title']} placeholder='ex.Ui Ux Designer' onChange={handleChange} name='job-title' hasError={error.title ? true : false} error={error} />
          </div>
          <div className='w-full mt-24px'>
             <Label name='company-name' required={true} title='Company-name'/>
            <Inputs value={formData['company-name']} placeholder='ex. Google' onChange={handleChange} name='company-name' hasError={error.company ? true : false} error={error} />
          </div>
          <div className='w-full mt-24px'>
           <Label name='industry' required={true} title='Industry'/>
            <Inputs value={formData['industry']} placeholder='ex. Information Technology' onChange={handleChange} name='industry' hasError={error.industry ? true : false} error={error} />
          </div>
          <div className='w-full flex justify-between mt-24px'>
            <div>
              <Label title='Location' name='location' required={false}/>
              <Inputs value={formData['location']} placeholder='ex. Chennai' onChange={handleChange} name='location' hasError={error.location ? true : false} error={error} />
            </div>
            <div>
              <Label title='Remote Type' name='remote-type' required={false}/>
              <Inputs value={formData['remote-type']} placeholder='ex. in-Office' onChange={handleChange} name='remote-type' hasError={error.jobType ? true : false} error={error} />
            </div>
          </div>
          <div className='w-full flex flex- justify-end mt-96px'>
            <Button width='w-[72px]' text='Next' onClick={handleNextStep} />
          </div>
        </form>
      </> : <>
        <Dialog.Title as="div" className="text-lg flex justify-between w-full font-poppins leading-6 text-gray-900" >
        <h3>{modalData.type === 'create' ? 'Create Job' : 'Edit Job'}</h3>
          <h3>Step 2</h3>
        </Dialog.Title>
        <form className='flex flex-col w-full mt-24px'>
          <Label title='Experience' name='experience' extraStyles='mt-24px' className='mt-24px'/>
          <div className='w-full flex justify-between '>
            <div>
              <Inputs value={formData['experience-min']} placeholder='Minimum' onChange={handleChange} name='experience-min' hasError={error['experience-min'] ? true : false} error={error} extraStyle={'!w-[244.5px]'} />
            </div>
            <div>
              <Inputs value={formData['experience-max']} placeholder='Maximum' onChange={handleChange} name='experience-max' hasError={error['experience-max'] ? true : false} error={error} extraStyle={'!w-[244.5px]'} />
            </div>
          </div>
        
        <Label name='salary' title='Salary' required={false} extraStyles='mt-24px'/>
          <div className='w-full flex justify-between'>
            <div>
              <Inputs value={formData['salary-min']} placeholder='Minimum' onChange={handleChange} name='salary-min' hasError={error['salary-min'] ? true : false} error={error} extraStyle='!w-[244.5px]'/>
            </div>
            <div>

              <Inputs value={formData['salary-max']} placeholder='Maximum' onChange={handleChange} name='salary-max' hasError={error['salary-max'] ? true : false} error={error} extraStyle='!w-[244.5px]' />
            </div>
          </div>
          <div className='w-full mt-24px'>
            <label htmlFor='job-title' className={`flex flex-start text-[#212121] font-poppins my-sm`}>Total Employee</label>

            <Inputs value={formData['total-employee']} placeholder='ex.100' onChange={handleChange} name='total-employee' hasError={error['total-employee'] ? true : false} error={error} />
          </div>
          <Label name='apply-type' title='Apply Type' extraStyles={'mt-24px'}/>
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
              <input type="radio" name="apply-type" value="externalApply" className="form-radio text-indigo-600" onChange={handleChange} />
              <span className="ml-2 text-placeholder-color font-poppins">External Apply</span>
            </label>
          </div>
          {error['apply-type'] &&<><span className='text-error-color flex justify-start'>Apply Type is required</span></> }
          <div className='w-full flex flex- justify-end mt-96px'>
            <Button width='w-[72px]' text='Save' onClick={handleSubmit} />
          </div>
        </form>
      </>
      }



    </>
  )
}

export default Form