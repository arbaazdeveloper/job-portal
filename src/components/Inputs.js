import React from 'react'

const Inputs = ({value,hasError,text,placeholder,error,onChange,name}) => {
    const inputStyle = 'border border-border-color p-input-padding rounded-sm outline-none font-poppins placeholder:text-[#7A7A7A] w-full'
  
    return (
    <>
            <input name={name} id={text} className={`${inputStyle} ${hasError?'border-error-color':''}`} placeholder={placeholder} value={value}  onChange={onChange} />
            {hasError?<><span className='text-error-color m-0 p-0 flex justify-start'>{error.message}</span></>:''}
    </>
  )
}

export default Inputs