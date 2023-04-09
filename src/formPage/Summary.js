import React from 'react';
import './formPage.css';

function Summary({ setStep, selectedOption, selectedPrice, onlineServiceChecked, storageChecked, customChecked }){

    var total = 0;

    const totalSlash = () => {
        if(selectedOption === 'monthly')
        {
            return <span>/mo</span>;
        }else {
            return <span>/yr</span>;
        }
    }
    const PriceMethod = () => {
        if(selectedOption === 'monthly')
        {
            return <span>(Monthly)</span>;
        }else {
            return <span>(Yearly)</span>;
        }
    }

    const PlanName = () => {
        if(selectedPrice === 'arcade')
        {
            return <span>Arcade</span>;
        }else if (selectedPrice === 'advanced')
        {
            return <span>Advanced</span>;
        }else if(selectedPrice === 'pro')
        {
            return <span>Pro</span>;
        }
    }

    const PlanPrice = () => {
        if(selectedPrice === 'arcade' && selectedOption === 'monthly')
        {
            total+=9;
            return <p className="plan-price">$9/mo</p>
        }else if (selectedPrice === 'arcade' && selectedOption === 'yearly')
        {
            total+=90;
            return <p className="plan-price">$90/yr</p>
        }else if(selectedPrice === 'advanced' && selectedOption === 'monthly')
        {
            total+=12;
            return <p className="plan-price">$12/mo</p>
        }else if (selectedPrice === 'advanced' && selectedOption === 'yearly')
        {
            total+=120
            return <p className="plan-price">$120/yr</p>
        }else if(selectedPrice === 'pro' && selectedOption === 'monthly')
        {
            total+=15
            return <p className="plan-price">$15/mo</p>
        }else if (selectedPrice === 'pro' && selectedOption === 'yearly')
        {
            total+=150;
            return <p className="plan-price">$150/yr</p>
        }
    }

    const AddsOnsReview = () => {
        const addOnsRev = [];
      
        if (onlineServiceChecked) {
          if (selectedOption === "monthly") {
            total += 1;
            addOnsRev.push(
              <div className="first-add-ons" key="online-service">
                <p>Online service</p>
                <p className="add-ons-review-price">+$1/mo</p>
              </div>
            );
          } else {
            total += 10;
            addOnsRev.push(
              <div className="first-add-ons" key="online-service">
                <p>Online service</p>
                <p className="add-ons-review-price">+$10/yr</p>
              </div>
            );
          }
        }
      
        if (storageChecked) {
          if (selectedOption === "monthly") {
            total += 2;
            addOnsRev.push(
              <div className="first-add-ons" key="larger-storage">
                <p>Larger Storage</p>
                <p className="add-ons-review-price">+$2/mo</p>
              </div>
            );
          } else {
            total += 20;
            addOnsRev.push(
              <div className="first-add-ons" key="larger-storage">
                <p>Larger Storage</p>
                <p className="add-ons-review-price">+$20/yr</p>
              </div>
            );
          }
        }
      
        if (customChecked) {
          if (selectedOption === "monthly") {
            total += 2;
            addOnsRev.push(
              <div className="first-add-ons" key="customizable-profile">
                <p>Customizable Profile</p>
                <p className="add-ons-review-price">+$2/mo</p>
              </div>
            );
          } else {
            total += 20;
            addOnsRev.push(
              <div className="first-add-ons" key="customizable-profile">
                <p>Customizable Profile</p>
                <p className="add-ons-review-price">+$20/yr</p>
              </div>
            );
          }
        }
      
        return addOnsRev;
      };


    return (
        <div className="personal-info summary">
        <div className="title">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
        </div>
        <div className="review">
            <div className="plans-review">
                <div className="plan-name">
                    <h4>{PlanName()} {PriceMethod()}</h4>
                    <p onClick={() => {setStep((currStep) => currStep = 1)}}>Change</p>
                </div>
                {PlanPrice()}
            </div>
            <div className="add-ons-review">
                {AddsOnsReview()}
            </div>
            </div>
            <div className="total">
                <p>Total (per year)</p>
                <h2>+${total}{totalSlash()}</h2>
            </div>
        

    </div>
    )
}

export default Summary;