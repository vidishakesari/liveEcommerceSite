
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/FilterReducer';
import { useProductContext } from "./ProductContext";

const FilterContext = createContext();

const initialState = {
    filter_product:[],
    all_product:[],
    allData:[],
    grid_view:false,
    sort_value:'highest',
    
    filter:{
      text:'',
      category:'All',
      company:'All',
      color:'All',
      maxPrice:0,
      minPrice:0,
      price:0,
    }
};

const FilterContextProvider = ({children}) =>{
    const {products} = useProductContext();
    const [state , dispatch]=useReducer(reducer , initialState); 

    const setGridView = () => {
        return dispatch({type:'LOAD_GRID_VIEW'});
    }
    
    const setListView = () =>{
        return dispatch({type:'LOAD_LIST_VIEW'});
    }

    const sortProduct = (event) =>{
        let userValue = event.target.value;
        return dispatch({type:'LET_GET_VALUE',payload:userValue })
    }
    const updateValue = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        return dispatch({type:'SET_SEARCH_VALUE' , payload:{name , value}});
    }
    
    const ClearFilter = () =>{
        dispatch({type:'SET_CLEAR_FILTER'})
    }

    useEffect(()=>{
        dispatch({type:'LET_SORT_VALUE'});
        dispatch({type:'SET_FILTER_TEXT'});
    },[state.sort_value , state.filter]);

    useEffect(()=>{
          
        dispatch({type:'LOAD_FILTER_PRODUCTS' , payload:products});
       },[products]);
     
       
      
    return (
        <FilterContext.Provider  value={{...state , setGridView , setListView , sortProduct , updateValue , ClearFilter}}>{children}</FilterContext.Provider>
    )  
}

const useFilterContext = () => {
    return useContext(FilterContext);
}

export {useFilterContext , FilterContextProvider ,  FilterContext};