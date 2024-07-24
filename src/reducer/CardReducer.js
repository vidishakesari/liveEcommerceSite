
const CardReducer = (state , action) =>{


    switch(action.type){

        case 'GET_CARD_ITEM':

        const {id , amount , color , product}=action.payload;

        let existingItem  = state.Card.find((curEle)=>{
           return curEle.id === color+id
        })
        if(existingItem){
              let productMatch = state.Card.map((curElem)=>{
                 if(curElem.id === color+id){
                  let productAvalible = curElem.amount + amount

                  if(productAvalible >= curElem.stock){
                    productAvalible = curElem.stock
                  }
                  
                  return{
                    ...curElem,
                    amount:productAvalible,
                  }
                 }else{
                    return curElem
                 }
              });
              return{
                ...state,
                Card:productMatch,
              }
        }
        else{

           let addCardItem ={
                id:color+id,
                name:product.name,
                color:color,
                amount:amount,
                price:product.price,
                image:product.image[0].url,
                stock:product.stock,
              }

              return{
                ...state,
               Card:[...state.Card, addCardItem ],
            }
           
          }
            

         case 'LET_INCREASE_VALUE':

    
             let incermentAmount = state.Card.map((curEle)=>{
              if(curEle.id === action.payload ){
                let increaAmount = curEle.amount + 1

                  if(increaAmount >= curEle.stock){
                    increaAmount = curEle.stock
                  }
                return {
                  ...curEle,
                  amount:increaAmount,
                }
              }else{
                return curEle
              }
             });
          return{
            ...state,
            Card: incermentAmount,
          }   

          case 'LET_DECRASES_VALUE':

          let decrementAmount = state.Card.map((curElem)=>{
            if(curElem.id === action.payload){
              let decreAmount = curElem.amount - 1

                if(decreAmount <= 0){
                  decreAmount = 0 
                }
              return{
                ...curElem,
                amount:decreAmount,
              }
            }else{
              return curElem
            }
          });
            return{
              ...state,
              Card:decrementAmount,
            }


           
        case 'LET_REMOVE_ITEM':

        let updatedClearItem = state.Card.filter((curElem)=>curElem.id !== action.payload )
          return{
            ...state,
            Card:updatedClearItem,
          }
          

          case 'CLEAN_ITEMS':
            return{
              ...state,
              Card:[],
            }

          case 'TOTAL_AMOUNT_OF_ITEMS':

            let totalAmount = state.Card.reduce((initialValue , curValue)=>{
              let {amount } = curValue;
              initialValue = initialValue + amount;
              return  initialValue;
            },0);

            return{
               ...state,
               total_amount:totalAmount,
            }  
        
         case 'TOTAL_PRICE_OF_ITEMS':

         let total_price = state.Card.reduce((initialValue , curValue)=>{
              const {amount , price} = curValue;
              let totalPrice = price * amount ;
              initialValue = initialValue + totalPrice;
          return initialValue;
         },0)
          return{
             ...state,
             product_price:total_price,
          }

          case 'SUBTOTAL_PRICE':
            let subTotal;
            const {product_price ,shipping , shipp_charges}=state;
             if(product_price >= 5000){
              subTotal = product_price + shipp_charges
             }else{
              subTotal = product_price + shipping
             }

          return{
            ...state,
            sub_total:subTotal,
          }
            
           
        default:
            return state;
    }
}
export default CardReducer;