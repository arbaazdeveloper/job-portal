import React, { useContext } from 'react'
import { Context } from '../context/Context'

const Edit = ({data}) => {
    const {setFormData,setModalData}=useContext(Context)
    const editData=()=>{
        setFormData({id:data.id,'job-title':data.title,'company-name':data.company,location:data.location,'remote-type':data.type,industry:data.industry,'apply-type':data.applyType,'salary-min':data.salaryMinimum,'salary-max':data.salaryMaximum,'experience-min':data.experienceMinimum,'experience-max':data.experienceMaximum,'total-employee':data.employee})
        setModalData({isOpen:true,type:'edit'})
    }

  return (
    <button onClick={editData} className='mx-lg' title='edit'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
    </button>

  )
}

export default Edit