
import { useContext } from 'react';
import './App.css';
import Cards from './components/Cards';
import './index.css';
import { Context } from './context/Context';
import Modal from './components/Modal';
import Button from './components/Button';

function App() {
  const {setIsOpen}=useContext(Context)
const getData=()=>{
  setIsOpen(true)
 

}
  return (
    <div className="">
   {/* <button onClick={()=>getData()} className='flex flex-row justify-center items-center p-2 bg-blue-500 shadow-sm rounded-lg flex-none order-0 border-none font-poppins font-medium text-white cursor-pointer m-10'>Apply now</button> */}
   <Button text='Create Job +' onClick={getData} width='w-100 m-2' />
    <Modal/>
   <div className="flex justify-around flex-wrap container mx-auto w-full">
    <Cards/>
    <Cards/>
    </div>
    </div>
  );
}

export default App;
