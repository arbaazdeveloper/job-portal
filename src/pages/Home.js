import React from 'react'
import { Context } from '../context/Context';
import Modal from '../components/Modal';
import Button from '../components/Button';

import { useContext } from 'react';
import Jobs from './Jobs';
const Home = () => {
    const { setModalData,alert } = useContext(Context)
    const getData = () => {
        setModalData({isOpen:true,type:'create'})
    }
    return (
        <>
            {alert}
            <Button text='Create Job +' onClick={getData} width='w-100 m-2' />
            <Modal />
            <Jobs />
        </>
    )
}

export default Home