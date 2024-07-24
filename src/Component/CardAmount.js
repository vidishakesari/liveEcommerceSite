import React from 'react'
import styled from 'styled-components';
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

const CardAmount = ({amount , increment , decrement}) => {
  return (
    <Wrapper>
        <div className='setbuttons'>
        <IoMdAdd onClick={increment}/>
        <span>{amount}</span>
        <FiMinus onClick={decrement}/>
    </div>

    
    </Wrapper>
  )
}
const Wrapper = styled.section`

.setbuttons{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin:1rem 0 0 0 ;
    border:none;
    background-color:transparent;
    font-size:2.6rem;
}

`;

export default CardAmount;