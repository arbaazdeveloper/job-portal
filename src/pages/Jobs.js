import React, { useContext, useEffect, useState } from 'react'
import { getRequest } from '../services/request'
import { Context } from '../context/Context'
import Cards from '../components/Cards'

const Jobs = () => {
    const {allJobs,setJobs}=useContext(Context)
    const[loading,setLoading]=useState(true)

    const getData=async ()=>{
        let response=await getRequest('jobs')
        setJobs(response)
        setLoading(false)

    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
    {allJobs.length===0 && <><div className='flex justify-center align-center font-poppins'><h1>{loading?<>Loading...</>:'No Jobs Yet Add A Job'}</h1></div></>}
   
    {allJobs.map((item)=>{
        return <div key={item.id} className="flex justify-around flex-wrap container mx-auto w-full m-custom-margin-top">
        <Cards title={item['job-title']} industry={item.industry} id={item.id} type={item['remote-type']} employee={item['total-employee']} company={item['company-name']} location={item.location} experienceMinimum={item['experience-min']} experienceMaximum={item['experience-max']} applyType={item['apply-type']} salaryMinimum={item['salary-min']} salaryMaximum={item['salary-max']}/>
        </div> 
    })}
    </>
  )
}

export default Jobs