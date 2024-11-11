"use client"
import { createContext,useState } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [loanDocID,setLoanDocId] = useState(null);

    return (
        <AppContext.Provider value={{loanDocID,setLoanDocId}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext,AppProvider }