import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/CardReducer';


const CardContext = createContext();

const getCardData =()=>{
    let CardData = localStorage.getItem('item');
    // if(CardData == []){
    //     return[];
    //  }
    //  else{
    //    return JSON.parse(CardData);
    //  }
    const parsedData = JSON.parse(CardData);
    if(!Array.isArray(parsedData)) return[];
     return parsedData;
}


const initialState = {
//Card:[],
Card:getCardData(),
total_amount:'',
product_price:'',
shipp_charges:10000,
shipping:5000,
sub_total:'',
}



const CardContextProvider = ({children}) =>{

    const [state , dispatch]=useReducer(reducer , initialState);

    const CardItem = (id , amount , color , product)=>{
     return dispatch({type:'GET_CARD_ITEM', payload:{id , amount , color , product}})
    }

    const Increment = (id) =>{
        return dispatch({type:'LET_INCREASE_VALUE',payload:id});
         }
        
         const Decrement = (id) =>{
            return dispatch({type:'LET_DECRASES_VALUE',payload:id});
         }

         const removeItem =(id)=>{
            return dispatch({type:'LET_REMOVE_ITEM',payload:id});
         }

         const cleanitem = ()=>{
            return dispatch({type:'CLEAN_ITEMS'});
         }

         useEffect(()=>{
            dispatch({type:'TOTAL_AMOUNT_OF_ITEMS'});
            dispatch({type:'TOTAL_PRICE_OF_ITEMS'});
            dispatch({type:'SUBTOTAL_PRICE'});
           localStorage.setItem('item',JSON.stringify(state.Card));
         },[state.Card]);

    return(
        <CardContext.Provider  value={{...state , CardItem , Increment , Decrement , removeItem , cleanitem}}>{children}</CardContext.Provider>
    )
}

const useCardContext = () =>{
    return useContext(CardContext);
}

export {CardContext ,CardContextProvider,useCardContext };