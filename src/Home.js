import React from 'react'
import styled from 'styled-components';
import HeroSection from './Component/HeroSection';
import Service from './Component/Service';
import Trusted from './Component/Trusted';
import Contact from './Contact';
import FeatureProduct from './Component/FeatureProduct';

const Home = () => {

  const data = {
    name: "Your Store",
    image:'Images/shopping.jpg'
  };
  return (
    <Wrapper>
     <HeroSection myData = {data}/>
    <FeatureProduct/>
     <Service/>
     <Trusted/>
     <Contact/>
  
</Wrapper>
  )
}
const Wrapper = styled.section`

height:100vh;
`;
export default Home;