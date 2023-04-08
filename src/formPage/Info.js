import React from 'react';
import './formPage.css';

function Info({ name, setName, email, setEmail, number, setNumber, handleNextClick, inputErrors  }){

    return (
        <div className="personal-info">
            <div className="title">
                <h1>Personal info</h1>
                <p className="title-p">Please provide your name, email address, and phone number.</p>
            </div>

            <form>

            <div className="inputs">
                <div className="name-wrapper input-wrapper">
                    <div className="label-content">
                        <label htmlFor="name">Name</label>
                        {inputErrors.name && <p className="error">{inputErrors.name}</p>}
                    </div>
                    <input className={`name ${inputErrors.name ? 'input-error' : ''}`} value={name} onChange={(event) => setName(event.target.value)} type="text" autoComplete="off" name="name" placeholder="Vanessa Mint"></input>
                 </div>
                <div className="email-wrapper input-wrapper">
                    <div className="label-content">
                        <label htmlFor="email">Email Address</label>
                        {inputErrors.email && <p className="error">{inputErrors.email}</p>}
                    </div>
                    <input className={`email ${inputErrors.email ? 'input-error' : ''}`} value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="off" name="email" placeholder="vanessamint@"></input>
                </div>
                <div className="number-wrapper input-wrapper">
                    <div className="label-content">
                        <label htmlFor="number">Phone Number</label>
                        {inputErrors.number && <p className="error">{inputErrors.number}</p>}
                    </div>
                    <input className={`number ${inputErrors.number ? 'input-error' : ''}`} maxLength={15} value={number} onChange={(event) => setNumber(event.target.value)} type="tel" autoComplete="off" name="number" placeholder="e.g +1 234 567 890"></input>
                </div>
            </div>


            </form> 
        </div>
    );
}

export default Info; 