import React from 'react'
import { useCardContext } from './Context/CardContext';
import CardItem from './Component/CardItem ';
import styled from 'styled-components';
import Footer from './Component/Footer';
import { NavLink } from 'react-router-dom';
import {Button} from './style/Button';
import FormatPrice from './Helper/FormatPrice';
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { user , isAuthenticated} = useAuth0();
  const {Card , cleanitem , product_price , shipp_charges ,shipping ,sub_total }=useCardContext();
  //console.log(Card);
  //console.log(product_price);
  //console.log(sub_total);
  //console.log(shipp_charges);
  //console.log(shipping);
  return (
    <Wrapper>
     <div className='container'>
      <h2>Your Shopping Basket</h2>
      <div className='grid grid-two-column'>
      <p>Buy Your Item</p>
     </div>
      
     </div>

     {isAuthenticated && (
          <div>
          <img src={user.picture} alt={user.name} className='imagebox' />
          <p style={{marginLeft:'3.8rem'}}>{user.name}</p>
              
      </div>
        )
        }
      
    
    
    
    <hr/>
    
     <div>
       {Card.map((curElem)=>{
         
          return(<CardItem key={curElem.id} {...curElem}/>)
           
           })
       }
     </div> 
     <div className='container shoppingCard'>
     <NavLink to='/product'>
     <Button>Shopping Continue</Button>
     </NavLink>

     

     <div className='container'>
        <div>
          <p className='amountTotal'>Total Amount : <FormatPrice price = {product_price} /></p>
         
          <p className='amountTotal'>Shipping Charges : <FormatPrice price={ product_price === 0 ? 0 : product_price <= 5000 ? shipping : shipp_charges}/></p>
          <hr/>
          <p className='amountTotal'>Amount to pay :<FormatPrice price= {sub_total}/></p>
        </div>
     </div>
     
      <NavLink>
     <Button style={{backgroundColor:'red'}} onClick={cleanitem}>Clear Card</Button>
     </NavLink> 
     

     </div>


     
      <Footer/>
    </Wrapper>
  )
}
const Wrapper = styled.section`
div{
  h2{
    font-size:3rem;
    font-weight:600;
  }
}
hr{
  margin-top:1rem;
}
.cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  
  
  
  .shoppingCard{
    display:flex;
    justify-content:space-between;
    margin-top:1rem;
  }

  .amountTotal{
    font-size:1.4rem;
  }
  .imagebox{
    margin-left:3.8rem;
    width:100px;
    height:auto;
    border-radius:100%;
  }
`;
export default Cart;