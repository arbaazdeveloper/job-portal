import { createContext, useState } from "react";
import Alert from "../components/Alert";

export const Context=createContext()


const Appcontext=({children})=>{
    let [modalData, setModalData] = useState({isOpen:false,type:''})
    const [alert,setAlert]=useState(<></>)
    const[formData,setFormData]=useState({'job-title':'','remote-type':'','location':'','industry':'','company-name':'','experience-max':'','experience-min':'','salary-min':'','salary-max':'','apply-type':'','total-employee':''})
    const [allJobs,setJobs]=useState([])
    const showAlert=(status,message)=>{
        setAlert(<><Alert status={status} message={message}/></>)
        setTimeout(() => {
            setAlert(<></>)
        }, 3000);
        
    }

    return <Context.Provider value={{modalData,setModalData,formData,setFormData,showAlert,alert,allJobs,setJobs}}>
        {children}
    </Context.Provider>
}

export default Appcontext