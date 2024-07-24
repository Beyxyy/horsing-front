import React, {createContext, useContext, useState} from "react";

const GlobalContext = createContext({});



export function setGlobalContext({children}) {
  
    const [datas, setDatas] = useState({});

    const addGlobalContextData = (key : string, value : unknown) => {
        setDatas({...datas, [key]: value});
    }

    const removeGlobalContextData = (key : string) => {
        delete datas[key];
    }

    return(
        <GlobalContext.Provider value={"test"}>
            {children}
        </GlobalContext.Provider>
    )




}

