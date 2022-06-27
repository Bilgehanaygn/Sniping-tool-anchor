import { createContext, useContext, useReducer } from "react";
import { initialState } from "./reducer";


export const Context = createContext(initialState);

export const ContextProvider = ({initialState, reducer, children})=>{
    return (
        <Context.Provider value= {useReducer(reducer, initialState)}>
            {children}
        </Context.Provider>
    );
}

export const ContextValue = ()=>{
    return useContext(Context);
}

export default ContextProvider;