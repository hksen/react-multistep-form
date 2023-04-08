import React, { useState } from 'react';
import './formPage.css';
import Images from "./images";

function Plans({ selectedOption, setSelectedOption, selectedPrice, setSelectedPrice }){

  const ArcadeText = () => {
    if(selectedOption === 'monthly')
    {
        return (
            <div className="price-text">
                <span className="price-name">Arcade</span>
                <p className="price-p">$9/mo</p>
            </div>
        )
    }else {
        return (
            <div className="price-text">
                <span className="price-name">Arcade</span>
                <p className="price-p">$90/yr</p>
                <p className="two-month-free">2 months free</p>
            </div>
        )
    }
}

const AdvancedText = () => {
    if(selectedOption === 'monthly')
    {
        return (
            <div className="price-text">
                <span className="price-name">Advanced</span>
                <p className="price-p">$12/mo</p>
            </div>
        )
    }else {
        return (
            <div className="price-text">
                <span className="price-name">Advanced</span>
                <p className="price-p">$120/yr</p>
                <p className="two-month-free">2 months free</p>
            </div>
        )
    }
}

const ProText = () => {
    if(selectedOption === 'monthly')
    {
        return (
            <div className="price-text">
                <span className="price-name">Pro</span>
                <p className="price-p">$15/mo</p>
            </div>
        )
    }else {
        return (
            <div className="price-text">
                <span className="price-name">Pro</span>
                <p className="price-p">$150/yr</p>
                <p className="two-month-free">2 months free</p>
            </div>
        )
    }
}

  // Function to handle click on choose box
  const handleClick = () => {
    // Update state to toggle between monthly and yearly
    setSelectedOption(selectedOption === 'monthly' ? 'yearly' : 'monthly');

  }
    return (
        <div className="personal-info plans-info">
        <div className="title">
            <h1>Select your plan</h1>
            <p className="plans-plan">You have the option of monthly or yearly billing.</p>
        </div>

        <div className="price-choice">
            <div className={selectedPrice === 'arcade' ? 'price-block active' : 'price-block'} onClick={() => {setSelectedPrice((currPrice) => currPrice = 'arcade')}}>
                <img alt="logo" className="icon" src={Images.arcade}></img>
                {ArcadeText()}
            </div>
            <div className={selectedPrice === 'advanced' ? 'price-block active' : 'price-block'} onClick={() => {setSelectedPrice((currPrice) => currPrice = 'advanced')}}>
                <img alt="logo" className="icon" src={Images.advanced}></img>
                {AdvancedText()}
            </div>
            <div className={selectedPrice === 'pro' ? 'price-block active' : 'price-block'} onClick={() => {setSelectedPrice((currPrice) => currPrice = 'pro')}}>
                <img alt="logo" className="icon" src={Images.pro}></img>
                {ProText()}
            </div>
        </div>

        <div className="monthly-yearly">
            <span className={selectedOption === 'monthly' ? 'monthly choosen' : 'monthly unchoose'}>Monthly</span>
            <div className="choose-box" onClick={handleClick}>
                <div className="round-wrapper">
                    <div className={selectedOption === 'monthly' ? 'bubble bl' : 'bubble br'}></div>
                </div>
            </div>
            <span className={selectedOption === 'yearly' ? 'yearly choosen' : 'yearly unchoose'}>Yearly</span>
        </div>
    </div>
    );
}

export default Plans;