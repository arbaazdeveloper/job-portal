import React, { useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import { Context } from '../context/Context'
import Form from './Form'

const Modal = () => {
    let {modalData, setModalData,setFormData} = useContext(Context)
    let  schema={ 'job-title': '', 'remote-type': '', 'location': '', 'industry': '', 'company-name': '', 'experience-max': '', 'experience-min': '', 'salary-min': '', 'salary-max': '', 'apply-type': '', 'total-employee': '' }
    function closeModal() {
      setModalData({isOpen:false,type:''})
      setFormData(schema)
    }
  
    
  return (
    <>
      <Transition appear show={modalData.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#000] bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-form-width  transform overflow-hidden rounded-lg bg-white p-form-padding align-middle border border-border-color  transition-all">
                  
                  <Form/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

  
export default Modal