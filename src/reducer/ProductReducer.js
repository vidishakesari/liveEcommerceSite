//import React from 'react'

const ProductReducer = (state, action) => {

  // if(action.type === 'SET_LOADING'){
  // return{
  //     ...state,
  //     isLoading:true,
  // }
    
  // }

  // if(action.type === 'API_ERROR'){
  //     return{
  //         ...state,
  //         isLoading:false,
  //         isError:true,
  //     }
  // }

  switch (action.type) {
      case 'SET_LOADING':
          return{
                  ...state,
                  isLoading:true,
               }
      case 'API_ERROR':
           
      return{
                 ...state,
             isLoading:false,
                  isError:true,
              }

      case 'SET_API_DATA':
        const FeatureData = action.payload.filter((curEle)=>{
          return curEle.featured === true;
        }
      )

          return{
              ...state,
              isLoading:false,
              products:action.payload,
              featureProducts:FeatureData,
          }       
          
          case 'SET_SINGLE_LOADING':
            return{
                    ...state,
                    isSingleLoading:true,
                 }
            
          case 'SET_SINGLE_PRODUCT':
            return{
              ...state,
              isSingleLoading:false,
              singleProduct:action.payload,
            }

            case 'SET_SINGLE_ERROR':
           
      return{
                 ...state,
             isSingleLoading:false,
                  isError:true,
              }
               

      default:
         return state;
         
  }


}

export default ProductReducer;