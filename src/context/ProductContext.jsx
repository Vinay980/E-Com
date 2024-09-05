import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const productContext=createContext()

export const ProductContextWrapper=({children})=>{
    const[product,setProduct]=useState([])
    const url='https://dummyjson.com/products?limit=0';
    useEffect(()=>{
        fetchProduct()
    },[])

    const fetchProduct=async()=>{
        let response=await axios.get(url)
        console.log(response.data.products);
        setProduct(response.data.products)
    }
    return(
        <productContext.Provider value={{product,setProduct}}>
            {children}
        </productContext.Provider>
    )
}


export const useProduct=()=>{
    return useContext(productContext)
}