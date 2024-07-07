import React, { useState } from 'react';
import axios from 'axios';
import '../auth.css';

function LogOut() {
    const [formData, setFormData] = useState({
        empNum: '',
        pin: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleNumberInput = (e, maxDigits) => {
        const { name, value } = e.target;
        const numericValue = value.replace(/\D/g, '').slice(0, maxDigits);
        setFormData(prevState => ({
            ...prevState,
            [name]: numericValue
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('LogOut form submitted');
        
        // Here you can handle the logout logic, e.g., sending the data to the server
    };

    return (
        <form id="logOutForm" onSubmit={handleSubmit} className="auth-form">
            <h1>Log out of any current job:</h1>
            <div style={{borderColor: 'red', borderTop: 2}}></div>
<div className="input-group">
            <label htmlFor="empNum">Employee Number:</label>
            <input
                type="text"
                id="empNum"
                name="empNum"
                required
                onChange={(e) => handleNumberInput(e, 3)}
                value={formData.empNum}
                minLength="3"
                maxLength="3"
                placeholder="Enter 3-digit number"
                aria-label="Employee Number"
            />
</div>
<div style={{borderColor: 'red', borderTop: 2}}></div>
<div className="input-group">
            <label htmlFor="pin">PIN:</label>
            <input
                type="password"
                id="pin"
                name="pin"
                required
                onChange={(e) => handleNumberInput(e, 5)}
                value={formData.pin}
                minLength="5"
                maxLength="5"
                placeholder="Enter 5-digit PIN"
                aria-label="PIN"
            />
</div>
            <button type="submit">Log Out</button>
        </form>
    );
}

export default LogOut;
