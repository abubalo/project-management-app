import { useState, createContext, Children } from "react";

type UserContext ={
    string: string;
    password: string
}

export const UserContextValue = createContext(null);

const UserContextProvide = ({children}){

    return(
        <UserContextValue.Provider>
            {Children}
        </UserContextValue.Provider>
    )
}
