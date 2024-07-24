import React from 'react'
import { useFilterContext } from '../Context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const {filter_product , grid_view} = useFilterContext();

//   if(grid_view === true){
//     return <GridView allProducts={filter_product}/>

// }
// if(grid_view === false){
//   return <ListView  allProducts={filter_product}/>
// }
   

  
  return (
    <>
      <div>
    {grid_view === true ? <GridView allProducts={filter_product}/>: <ListView  allProducts={filter_product}/>}
    </div>
  </>
    
  )
}


export default ProductList;