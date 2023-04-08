import React, { useState } from 'react';
import './formPage.css';

function AddOns({ selectedOption, onlineServiceChecked, setOnlineServiceChecked, storageChecked, setStorageCheck, customChecked, setCustomCheck}){


    const OnlinePlan = () => {
        if(selectedOption === 'monthly')
        {
            return <p className="add-ons-price">+$1/mo</p>;
        }else if(selectedOption === 'yearly'){
            return <p className="add-ons-price">+$10/yr</p>;
        }
    }

    const StoragePlan = () => {
        if(selectedOption === 'monthly')
        {
            return <p className="add-ons-price">+$2/mo</p>;
        }else if(selectedOption === 'yearly'){
            return <p className="add-ons-price">+$20/yr</p>;
        }
    }

    const CustomPlan = () => {
        if(selectedOption === 'monthly')
        {
            return <p className="add-ons-price">+$2/mo</p>;
        }else if(selectedOption === 'yearly'){
            return <p className="add-ons-price">+$20/yr</p>;
        }
    }

    const handleOnlineServiceChange = (event) => {
        setOnlineServiceChecked(event.target.checked);
    }

    const handleStorageCheck = (event) => {
        setStorageCheck(event.target.checked);
    }

    const handleCustom = (event) => {
        setCustomCheck(event.target.checked)
    }
    return (
        <div className="personal-info add-ons-wrapper">
        <div className="title">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
        </div>

        <div className="add-ons-check">
            <div className={onlineServiceChecked ? "add-ons-block active" : "add-ons-block"}>
                <div className="add-ons-content checkbox-cust">
                    <input type="checkbox" checked={onlineServiceChecked} onChange={handleOnlineServiceChange} name="online-service" className="checkbox"></input>
                    <span className="checkmark"></span>
                    <div className="labels">
                        <label htmlFor="online-service" className="add-ons-t">Online service</label>
                        <label htmlFor="online-service" className="add-ons-p">Access to multiplayer games</label>
                    </div>
                    {OnlinePlan()}
                </div>
            </div>
            <div className={storageChecked ? "add-ons-block active" : "add-ons-block"}>
                <div className="add-ons-content checkbox-cust">
                    <input type="checkbox" checked={storageChecked} onChange={handleStorageCheck} name="online-service" className="checkbox"></input>
                    <span className="checkmark"></span>

                    <div className="labels" style={{ left: '31%' }}>
                        <label htmlFor="online-service" className="add-ons-t">Larger storage</label>
                        <label htmlFor="online-service" className="add-ons-p">Extra 1TB pf cloud save</label>
                    </div>
                    {StoragePlan()}
                </div>
            </div>
            <div className={customChecked ? "add-ons-block active" : "add-ons-block"}>
                <div className="add-ons-content checkbox-cust">
                    <input type="checkbox" name="online-service" checked={customChecked} onChange={handleCustom}  className="checkbox"></input>
                        <span className="checkmark"></span>
                    <div className="labels">
                        <label htmlFor="online-service" className="add-ons-t">Customizable Profile</label>
                        <label htmlFor="online-service" className="add-ons-p">Custom theme on your profile</label>
                    </div>
                    {CustomPlan()}
                </div>
            </div>
        </div>

    </div>
    )
}

export default AddOns;