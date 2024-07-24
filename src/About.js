import React from 'react';
import styled from 'styled-components';
import HeroSection from './Component/HeroSection';
import Footer from './Component/Footer';
import { useProductContext } from './Context/ProductContext';

const About = () => {

  const {myName}=useProductContext();

  const myAbout={
    name:'vidisha Ecommerce',
    image:'Images/shopping1.jpg'
  }
  return (
    <Wrapper>
    {myName}
       <HeroSection  myData = {myAbout}/>
       <Footer/>
    </Wrapper>
  )
}
const Wrapper = styled.section`

`;
export default About;