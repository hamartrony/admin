import {createContext} from "react";

const AppContext = createContext({
    nome: ""
})

export function AppProvider(props){
    return(
        <AppContext.Provider value={{
            nome: `sdfg sasdf sadf`
        }}>
            {props.children}

        </AppContext.Provider>
    )
}

export default AppContext
