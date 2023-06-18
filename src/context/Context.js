import { createContext, useState } from "react";

export const Context=createContext()


const Appcontext=({children})=>{
    let [isOpen, setIsOpen] = useState(false)
    const[formData,setFormData]=useState({'job-title':'','remote-type':'','location':'','industry':'','company-name':'','experience-max':'','experience-min':'','salary-min':'','salary-max':'','apply-type':'','total-employee':''})
    return <Context.Provider value={{isOpen,setIsOpen,formData,setFormData}}>
        {children}
    </Context.Provider>
}

export default Appcontext