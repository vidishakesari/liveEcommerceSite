import { createContext, useContext , useReducer ,useEffect } from "react";
import reducer from '../reducer/ProductReducer';
import axios from "axios";

const AppContext = createContext();
const API ='https://api.pujakaitem.com/api/products';

const initialState = {

    products:[],
    featureProducts:[],
    isLoading:false,
    isError:false,
    isSingleLoading:false,
    singleProduct:{},

    
}

const AppProvider = ({ children }) => {

const [state , dispatch]=useReducer(reducer , initialState);

const getProduct = async (url) =>{
  dispatch({type:'SET_LOADING'});
 try{
   const res = await axios.get(url);
   const product = await res.data;
  //console.log(product);
   dispatch({type:'SET_API_DATA' , payload:product})
  }catch(error){
    dispatch({type:'API_ERROR'});
  }
}

const getSingleProduct = async (url) =>{
  dispatch({type:'SET_SINGLE_LOADING'});
  try{
    const res = await axios.get(url);
     const singleProduct = await res.data;
     dispatch({type:'SET_SINGLE_PRODUCT' , payload:singleProduct})
  }catch(error){
    dispatch({type:'SET_SINGLE_ERROR'});
  }
     
   
};
 

useEffect(()=>{
  getProduct(API);
},[]);

    return (
      <AppContext.Provider value={{...state, getSingleProduct }} >
        {children}
      </AppContext.Provider>
    );
  };
  const useProductContext = () =>{
    return useContext(AppContext);
}

export {AppProvider , AppContext,useProductContext};