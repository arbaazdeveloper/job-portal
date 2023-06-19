import React from 'react'

const Label = ({required,title,name,extraStyles}) => {
    const labelStyles = 'flex flex-start text-[#212121] font-poppins my-sm'
  return (
    <>
     <label htmlFor={name} className={labelStyles+' '+extraStyles}>{title}{required?<strong style={{ color: 'red' }}>*</strong>:''}</label> 
    </>
  )
}

export default Label