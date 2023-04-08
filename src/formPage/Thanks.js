import React, { useState } from 'react';
import './formPage.css';
import Images from "./images";

function Thanks(){

    return (
        <div className="thanks-container">
        <div className="thanks">
        <img alt="logo" className="thanks-logo" src={Images.confirmed}></img>
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hope you have{"\n"} fun using our platform. If you ever need support, please feel{"\n"}free to email us at support@loremgming.com.</p>
        </div>

    </div>
    )
}

export default Thanks;