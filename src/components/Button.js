import React from 'react'

const Button = ({text,width,onClick}) => {
  return (
    <button onClick={onClick} className={`flex  flex-row h-custom-btn-height ${width} justify-center items-center p-2 bg-[#1597E4] rounded-m flex-none m-custom-margin-top  border-none font-poppins font-medium text-white cursor-pointer`}>{text}</button>
  )
}

export default Button