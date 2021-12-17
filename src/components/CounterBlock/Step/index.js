import React from 'react';
import PropTypes from 'prop-types';


 const Step = (props) => {
    const { step, setStep } = props;
    // const handleInput = ({target:{value}}) => updateStep(value);

    const handlerInputStep = ({ target: { value } }) => {
       setStep(value);
      }
        
    return (
      <div >
      <p>Step: {step}</p>
      <input 
      type='nuber'
      placeholder={'change step'}
      onChange={handlerInputStep}/> 
      </div>
    );  
}

Step.propTypes = {
  step:  PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired
}


export default Step;
