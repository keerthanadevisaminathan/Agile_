import { Component, useEffect } from "react";
import "./uidesign.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function UiDesign() 
    {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [contactNumber, setContactNumber] = useState('');
        const [AdmitTime, setAdmitTime] = useState('');
        const [AdmitDate, setAdmitDate] = useState('');
        const [gender, setGender] = useState('male');
        const [paymentMethod, setPaymentMethod] = useState('online');
        const [hasInsurance, setHasInsurance] = useState('no'); // Default insurance is 'no'
        const [insurancePolicy, setInsurancePolicy] = useState('');
        const [wardNumber, setWardNumber] = useState('');
        const [amount, setAmount] = useState('');
    
        const handleSubmit = (event) => {
            event.preventDefault();
            
        };
      return(
    <>
    <div className="outer">
    <form className="form" onSubmit={handleSubmit}>
        
        <h1 className="name">Patient Details</h1>
            <div className="flex">
                <label>
                    <input
                        required
                        placeholder=""
                        type="text"
                        className="input"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <span className="span">first name<div className="icon"><FontAwesomeIcon icon={faUser} /></div></span>
                </label>

                <label>
                    <input
                        required
                        placeholder=""
                        type="text"
                        className="input"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <span className="span">last name <div className="icon"><FontAwesomeIcon icon={faUser} /></div></span>
                </label>
            </div>
            <div className="flex1">
            <label>
                <input
                    required
                    placeholder=""
                    type="email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <span className="span">Your Email<div className="icon1"><FontAwesomeIcon icon={faEnvelope} /></div></span>
            </label>

            <label>
                <input
                    required
                    type="tel"
                    placeholder=""
                    className="input"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                />
                <span className="span">contact number <div className="icon1"><FontAwesomeIcon icon={faPhone} /></div></span>
            </label>
            
            <div className="flex5">
                <label>
                    <input
                        required
                        placeholder=""
                        type="text"
                        className="input"
                        value={AdmitDate}
                        onChange={(e) => setAdmitDate(e.target.value)}
                    />
                    
                    <span className="span">Admit Date<div className="icon"><  FontAwesomeIcon icon={faCalendarDays} /></div></span>
                </label>
                </div>
                <label>
                    <input
                        required
                        placeholder=""
                        type="text"
                        className="input"
                        value={AdmitTime}
                        onChange={(e) => setAdmitTime(e.target.value)}
                    />
                    <span className="span">Admit Time <div className="icon"><FontAwesomeIcon icon={faClock} /></div> </span>
                </label>
                </div>
               <div className="radio">
                
                <span className="span">Gender:</span>
                        <label>
                            <input
                                type="radio"
                                value="male"
                                checked={gender === 'male'}
                                onChange={() => setGender('male')}
                            />
                            Male
                            
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="female"
                                checked={gender === 'female'}
                                onChange={() => setGender('female')}
                            />
                            Female
                        </label>
                        </div>
            <h1 className="registration">Registration Details</h1>
            <div className="payment-method">
                        <label className="span">Payment Method:</label>
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                        </select>
                    </div>
                    <div className="insurance-radio">
                        <span className="span">Do you have insurance?</span>
                        <label>
                            <input
                                type="radio"
                                value="yes"
                                checked={hasInsurance === 'yes'}
                                onChange={() => setHasInsurance('yes')}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="no"
                                checked={hasInsurance === 'no'}
                                onChange={() => setHasInsurance('no')}
                            />
                            No
                        </label>
                    </div>

                    {hasInsurance === 'yes' && (
                        <div className="insurance-policy">
                            <label>
                <input
                    required
                    placeholder=""
                    type="text"
                    className="input"
                    value={insurancePolicy}
                    onChange={(e) => setInsurancePolicy(e.target.value)}
                />
                <span className="span">Insurance Number</span>
            </label>
            
                        </div>
                    )}
                    <div className="ward">
            <label>
                <input
                    required
                    type="tel"
                    placeholder=""
                    className="input"
                    value={wardNumber}
                    onChange={(e) => setWardNumber(e.target.value)}
                />
                <span className="span">Ward Number <div className="icon1"></div></span>
            </label>
            </div>
            <div className="ward">
            <label>
                <input
                    required
                    type="tel"
                    placeholder=""
                    className="input"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <span className="span">Advance Payment</span>
            </label>
            </div>
            <button> <span>Rigester</span>
            </button>
            </form>
        </div>
    </>
      )
      
}
export default UiDesign;