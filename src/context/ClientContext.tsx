import { createContext, useContext, useState } from "react";

const ClientContext = createContext<any>(null);

export const ClientProvider = ({children}:{children:React.ReactNode})=>{
    const [refreshClients, setRefreshClients] = useState(0);

    const triggerClientRefresh = ()=>{
        setRefreshClients(pre=> pre+1)
    }

    return (
        <ClientContext.Provider value={{refreshClients, triggerClientRefresh}}>
            {children}
        </ClientContext.Provider>
    )
}

export const useClientContext = ()=> useContext(ClientContext);