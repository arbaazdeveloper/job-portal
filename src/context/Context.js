import { createContext, useState } from "react";

export const Context=createContext()


const Appcontext=({children})=>{
    let [isOpen, setIsOpen] = useState(false)
    return <Context.Provider value={{isOpen,setIsOpen}}>
        {children}
    </Context.Provider>
}

export default Appcontext