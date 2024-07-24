import React , { useState } from 'react'
import styled from 'styled-components';
import { TiTick } from "react-icons/ti";

import { NavLink } from 'react-router-dom';
import {Button} from '../style/Button';
import CardAmount from './CardAmount';
import { useCardContext } from '../Context/CardContext';

const AddToCard  = ({product}) => {
 const {CardItem}=useCardContext();
  const { id , colors , stock}=product;

  const [color , setcolor]=useState();
  const [amount , setamount] = useState(0);

  const Increment = () =>{
    if(amount < stock ){
      return setamount(amount + 1);
    }
    else{
      setamount(stock);
    }
  }

    const Decrement = () => {
      if(amount > 0){
         return setamount(amount - 1)
      }

      else{
        return setamount(amount);
      }
    }
  
  return (
    <Wrapper>
      <div>
      <p>Colors :&nbsp;</p>
      <span>
        {colors.map((curEle , index)=>{
          return(
            <button key={index} className='setBtn' style={{backgroundColor:curEle}} onClick={() => setcolor(curEle)}> 
            {color === curEle ? <TiTick className='tickset'/> : null}</button>
          )
        })}
      </span>
      </div>

<CardAmount
  amount={amount}
  increment={Increment}
  decrement={Decrement}
/>
      

      <NavLink to='/Cart' onClick={()=>CardItem(id , amount , color , product)}>
        <Button >Add Item</Button>
      </NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.setBtn{
  width:1.7rem;
  height:1.7rem;
  border-radius:50%;
  margin-right:1rem;
  opacity: 0.5;
  cursor: pointer;
  border: none;
    outline: none;

  &:hover {
      opacity:1;
}
}
.tickset{
  color:black;
  font-size:2rem;
  
}
Button{
  margin-top:1.8rem;
    padding:1rem;
    font-size:1.5rem;
}

`;
export default AddToCard ;