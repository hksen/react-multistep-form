import React, { useState } from 'react'; 
import './formPage.css';
import Info from './Info';
import Plans from './Plans';
import AddOns from './Add-ons';
import Summary from './Summary';
import Thanks from './Thanks';

function Form(){
    const [step, setStep] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [inputErrors, setInputErrors] = useState({ name: false, email: false, number: false });

    const [selectedOption, setSelectedOption] = useState('monthly');
    const [selectedPrice, setSelectedPrice] = useState('arcade');

    const [onlineServiceChecked, setOnlineServiceChecked] = useState(false);
    const [storageChecked, setStorageCheck] = useState(false);
    const [customChecked, setCustomCheck] = useState(false); 

    const handleNextClick = (event) => {
        event.preventDefault();
        const errors = { name: false, email: false, number: false };
        if (!name || /[\d~`!@#$%\^&*()+=\-\[\]\\';,/{}|\\":<>\?]/g.test(name)) {
          errors.name = true;
          if (!name) {
            setInputErrors((prevState) => ({
              ...prevState,
              name: "This field is required",
            }));
          } else {
            setInputErrors((prevState) => ({
              ...prevState,
              name: "Enter a valid name",
            }));
          }
        }else {
            setInputErrors((prevState) => ({
                ...prevState,
                name: "",
              }));
        }
        if (!email || !email.includes('@')) {
          errors.email = true;
          if (!email) {
            setInputErrors((prevState) => ({
              ...prevState,
              email: "This field is required",
            }));
          } else {
            setInputErrors((prevState) => ({
              ...prevState,
              email: "Enter a valid email",
            }));
          }
        }else {
            setInputErrors((prevState) => ({
                ...prevState,
                email: "",
              }));
        }

        if (!number || /[^\d]/g.test(number) || number.length < 15) {
          errors.number = true;
          if (!number) {
            setInputErrors((prevState) => ({
              ...prevState,
              number: "This field is required",
            }));
          } else {
            setInputErrors((prevState) => ({
              ...prevState,
              number: "Enter a valid number",
            }));
          }
        }else {
            setInputErrors((prevState) => ({
                ...prevState,
                number: "",
              }));
        }
        if (errors.name || errors.email || errors.number) {
          return;
        }
        setStep((currStep) => currStep + 1);
      };
      

    const StepDisplay = () => {
        if(step === 0){
            return <Info name={name} setName={setName} email={email} setEmail={setEmail} number={number} setNumber={setNumber} handleNextClick={handleNextClick} inputErrors={inputErrors} />
        }else if(step === 1){
            return <Plans selectedOption={selectedOption} setSelectedOption={setSelectedOption} selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice}/>
        }else if(step === 2){
            return <AddOns 
            selectedOption={selectedOption} 
            onlineServiceChecked={onlineServiceChecked} 
            setOnlineServiceChecked={setOnlineServiceChecked}
            storageChecked={storageChecked}
            setStorageCheck={setStorageCheck}
            customChecked={customChecked}
            setCustomCheck={setCustomCheck}
            />;
        }else if(step === 3){
            return <Summary setStep={setStep} selectedOption={selectedOption} selectedPrice={selectedPrice} onlineServiceChecked={onlineServiceChecked} storageChecked={storageChecked} customChecked={customChecked}/>
        }else if(step == 4){
            return <Thanks/>
        }
    }
    const ButtonDisplay = () => {
        if(step === 0)
        {
            return (
                <div className="button-wrapper" style={{ justifyContent: 'flex-end' }}>
                    <button className="next" type="submit" onClick={handleNextClick}>Next Step</button>
                </div>
            )
        }else if(step === 3){
            return(
                <div className="button-wrapper">
                    <button className="go-back" type="submit" onClick={() => {setStep((currStep) => currStep - 1)}}>Go Back</button>
                    <button className="confirm" type="submit" onClick={() => {setStep((currStep) => currStep + 1)}}>Confirm</button>
                </div>
            )
        }else if(step === 4) {
            
        }else {
            return(
                <div className="button-wrapper">
                    <button className="go-back" type="submit" onClick={() => {setStep((currStep) => currStep - 1)}}>Go Back</button>
                    <button className="next" type="submit" onClick={() => {setStep((currStep) => currStep + 1)}}>Next Step</button>
                </div>
            )
        }

       
    }
    return (
            <main>
                <div className="page-content">
                    <div className="wrapper">
                        <div className="first-block">
                            <div className="steps-wrapper">
                                <div className="steps">
                                    <div className={`round ${step === 0 ? 'round light-blue' : ''}`}>
                                        <p className={`${step === 0 ? 'marine' : ''}`}>1</p>
                                    </div>
                                    <div className="step-title">
                                        <h5 className="step-num">Step 1</h5>
                                        <h5>Your info</h5>
                                    </div>
                                </div>
                                <div className="steps">
                                    <div className={`round ${step === 1 ? 'round light-blue' : ''}`}>
                                            <p className={`${step === 1 ? 'marine' : ''}`}>2</p>
                                        </div>
                                        <div className="step-title">
                                            <h5 className="step-num">Step 2</h5>
                                            <h5>Select plan</h5>
                                        </div>
                                    </div>
                                <div className="steps">
                                    <div className={`round ${step === 2 ? 'round light-blue' : ''}`}>
                                            <p className={`${step === 2 ? 'marine' : ''}`}>3</p>
                                        </div>
                                        <div className="step-title">
                                            <h5 className="step-num">Step 3</h5>
                                            <h5>Add-ons</h5>
                                        </div>
                                    </div>
                                <div className="steps">
                                    <div className={`round ${step === 3 || step === 4 ? 'round light-blue' : ''}`}>
                                            <p className={`${step === 3 || step === 4 ? 'marine' : ''}`}>4</p>
                                        </div>
                                        <div className="step-title">
                                            <h5 className="step-num">Step 4</h5>
                                            <h5>Summary</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="second-block">
                            {StepDisplay()}
                            {ButtonDisplay()}
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default Form;