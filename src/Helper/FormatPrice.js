const FormetPrice = ({price}) => {

    return new Intl.NumberFormat('en-IN',
     { style: 'currency',
      currency: 'INR', 
      maximumSignificantDigits: 3 } ).format(price/100);
        
  
}

export default FormetPrice;