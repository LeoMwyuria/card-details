import React, { useState } from 'react';
import thankyouImage from './images/thankyou.png';

function Main() {
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardDetailsContent, setCardDetailsContent] = useState('');

  const handleCardNumberChange = (event) => {
    let value = event.target.value;

   
    value = value.replace(/\D/g, '');

    
    value = value.slice(0, 16);

   
    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += value[i];
    }

    setCardNumber(formattedValue);
  };

  const handleExpMonthChange = (event) => {
    let value = event.target.value;

    
    value = value.replace(/\D/g, '');

   
    value = value.slice(0, 2);

   
    if (value > 12) {
      value = '12';
    }

    setExpMonth(value);
  };

  const handleExpYearChange = (event) => {
    let value = event.target.value;

   
    value = value.replace(/\D/g, '');

    if (value.length > 2) {
      value = value.slice(0, 2);
    }

    setExpYear(value);
  };

  const handleCvcChange = (event) => {
    let value = event.target.value;

    value = value.replace(/\D/g, '');

    if (value.length > 3) {
      value = value.slice(0, 3);
    }

    setCvc(value);
  };

  const handleCardHolderNameChange = (event) => {
    let value = event.target.value;
    
    value = value.replace(/[^a-zA-Z\s-]/g, '');

   
    value = value.slice(0, 26);

    setCardHolderName(value);
  };
  
  const ButtonFunction = () => {
    setCardDetailsContent(
        <div className='thankyou'>
            <img className='thankyou-pic' src={thankyouImage} alt="" />
            <p className='ty'>THANK YOU!</p>
            <p className='ty2'>We have added your card details</p>
        </div>
    );
  };

  return (
    <div className='main'>
        <div className='main-top'>
            <div className='cards-div'>
                <div className='back-card'>
                    <div className='black-line'></div>
                    <div className='cvc'>{cvc}</div>
                </div>
                <div className='front-card'>
                    <div className='big-circle'></div>
                    <div className='small-circle'></div>
                    <br /><br /><br />
                    <div className='card-number'>{cardNumber}</div>
                    <br />
                    <div className='name-date'>
                    <div className='card-holder'>{cardHolderName.toUpperCase()}</div>
                    <div className='exp-date1'>{expMonth}/{expYear}</div>
                    </div>
                </div>
             </div>
        </div>
        <br /><br />
        <div className='card-details'>
            {}
            {cardDetailsContent ? (
              <p>{cardDetailsContent}</p>
            ) : (
              <React.Fragment>
                <p className='p1'> CARDHOLDER NAME</p>
                <input placeholder='e.g. Jane Appleseed' className='cardInput' type="text" onChange={handleCardHolderNameChange} value={cardHolderName} maxLength={26} />
                <p className='p1'> CARD NUMBER</p>
                <input placeholder='e.g. 1234 5678 9123 0000' className='cardInput' type="text" onChange={handleCardNumberChange} value={cardNumber} />
                <div className='exp-cvc'>
                <div className='expiration'>
                  <p>EXP. DATE (MM/YY)</p>
                  <input placeholder=' MM' className='exp-date' type="text" onChange={handleExpMonthChange} value={expMonth} />
                  <input placeholder='  YY' className='exp-date' type="text" onChange={handleExpYearChange} value={expYear} />
                </div>
                <div className='cvc2'>
                  <p>CVC</p>
                  <input className='cvc-input' placeholder='e.g 123' type="text" onChange={handleCvcChange} value={cvc} />
                </div>
                </div>
                
                <br /><br />
                <button onClick={ButtonFunction}  className='btn'>Confirm</button>
              </React.Fragment>
            )}
        </div>
    </div>
  )
}

export default Main;
