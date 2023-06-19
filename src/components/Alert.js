import React from 'react'

const Alert = ({ status, message }) => {
    if (status === 'success') {

        return (
            <div className='flex w-full justify-center'>
                <div className="alert bg-[#77dd77] w- absolute top-0 left-50% rounded-lg p-4 text-white text-center">
                    <p className="text-xl">Success!</p>
                    <p>{message}</p>
                </div>
            </div>
        )
    }
    else {
        return (  <div className='flex w-full justify-center'>
        <div className="alert bg-error-color w- absolute top-0 left-50% rounded-lg p-4 text-white text-center">
            <p className="text-xl">Failure!</p>
            <p>{message}</p>
        </div>
    </div>
        )
    }
}

export default Alert