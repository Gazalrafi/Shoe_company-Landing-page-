import React,{createContext, useState} from 'react';
import shoesList from "../shoesList.json";

export const ShoesContext=createContext(shoesList);

export const ShoesProvider = ({children}) => {
   
    const [cartItems,setCartItems]=useState(null);
 

    return (
        <ShoesContext.Provider value={{shoesList,setCartItems,cartItems}}>
            {children}
        </ShoesContext.Provider>
    )
}