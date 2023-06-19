import React from 'react'
import { Context } from '../context/Context';
import Modal from '../components/Modal';
import Button from '../components/Button';

import { useContext } from 'react';
const Home = () => {
    const { setIsOpen,alert } = useContext(Context)
    const getData = () => {
        setIsOpen(true)
    }
    return (
        <>
            {alert}
            <Button text='Create Job +' onClick={getData} width='w-100 m-2' />
            <Modal />
        </>
    )
}

export default Home