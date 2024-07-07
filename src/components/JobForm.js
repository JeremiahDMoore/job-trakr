import React, { useState } from 'react';
import axios from 'axios';
import CurrentJobs from './CurrentJobs';

function JobForm() {
    const [formData, setFormData] = useState({
        empNum: 'from login',
        timeIn: 'from jobStart',
        timeOut: '',
        opNum: 'from jobStart',
        jobNum: 'from jobStart',
        jobNotes: '',
        dept: 'from jobStart',
        cycleTime: '',
        jobPhoto: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(`${name} changed to ${value}`);
    };

    const handleNumberInput = (e, maxDigits) => {
        const { name, value } = e.target;
        const numericValue = value.replace(/\D/g, '').slice(0, maxDigits);
        setFormData(prevState => ({
            ...prevState,
            [name]: numericValue
        }));
    };

    const handleJobNumInput = (e) => {
        const { value } = e.target;
        const filteredValue = value.replace(/[^0-9-]/g, '').slice(0, 7);
        setFormData(prevState => ({
            ...prevState,
            jobNum: filteredValue
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prevState => ({
                    ...prevState,
                    jobPhoto: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted');
    
        const jobData = {
            empNum: formData.empNum || 'N/A',
            timeIn: formData.timeIn || '00:00',
            timeOut: formData.timeOut || '00:00',
            opNum: formData.opNum || 'N/A',
            jobNum: formData.jobNum || 'N/A',
            jobNotes: formData.jobNotes || 'N/A',
            dept: formData.dept || 'N/A',
            cycleTime: formData.cycleTime || '00:00:00',
            jobPhoto: formData.jobPhoto
        };
    
        try {
            const response = await axios.post('https://us-east-1.aws.data.mongodb-api.com/app/application-0-vqfqxkq/endpoint/api/jobs', jobData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Job created successfully:', response.data);
            setFormData({
                empNum: '',
                timeIn: '',
                timeOut: '',
                opNum: '',
                jobNum: '',
                jobNotes: '',
                dept: '',
                cycleTime: '',
                jobPhoto: null
            });
        } catch (error) {
            console.error('There was an error submitting the form!', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request data:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
            console.error('Error config:', error.config);
        }
    };

    return (
        <form id="jobForm" onSubmit={handleSubmit} className="container">
            <h1>Job Tracker</h1>

            <label htmlFor="empNum">Employee Number:</label>
            <input 
                type="number" 
                id="empNum" 
                name="empNum" 
                required 
                onChange={(e) => handleNumberInput(e, 3)}
                value={formData.empNum} 
                min="100"
                max="999"
                placeholder="Enter a 3-digit number"
                aria-label="Employee Number"
            />

            {/* <div className="input-with-button">
                <label htmlFor="timeIn">Time In:</label>
                <input 
                    type="time" 
                    id="timeIn" 
                    name="timeIn" 
                    required 
                    onChange={handleChange} 
                    value={formData.timeIn} 
                    aria-label="Time In"
                />
                <button type="button" onClick={() => setFormData(prev => ({ ...prev, timeIn: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }) }))}>
                    Set Current Time
                </button>
            </div> */}

            <CurrentJobs />

            <div className="input-with-button">
                <label htmlFor="timeOut">Time Out:</label>
                <input 
                    type="time" 
                    id="timeOut" 
                    name="timeOut" 
                    required 
                    onChange={handleChange} 
                    value={formData.timeOut} 
                    aria-label="Time Out"
                />
                <button type="button" onClick={() => setFormData(prev => ({ ...prev, timeOut: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }) }))}>
                    Set Current Time
                </button>
            </div>

            <label htmlFor="opNum">Operation Number:</label>
            <input 
                type="number" 
                id="opNum" 
                name="opNum" 
                required 
                onChange={(e) => handleNumberInput(e, 3)}
                value={formData.opNum} 
                min="100"
                max="999"
                placeholder="Enter a 3-digit number"
                aria-label="Operation Number"
            />

            <label htmlFor="jobNum">Job Number:</label>
            <input 
                type="text" 
                id="jobNum" 
                name="jobNum" 
                required 
                onChange={handleChange}
                onInput={handleJobNumInput}
                value={formData.jobNum} 
                maxLength="7"
                placeholder="e.g., 123-4567"
                aria-label="Job Number"
            />

            <label htmlFor="jobNotes">Job Notes:</label>
            <textarea 
                id="jobNotes" 
                name="jobNotes" 
                onChange={handleChange} 
                value={formData.jobNotes} 
                maxLength="500"
                aria-label="Job Notes"
            ></textarea>

            <label htmlFor="dept">Department:</label>
            <select 
                id="dept" 
                name="dept" 
                required 
                onChange={handleChange} 
                value={formData.dept}
                aria-label="Department"
            >
                <option value="">Select Department</option>
                <option value="MANUAL">MANUAL</option>
                <option value="MILL">MILL</option>
                <option value="LATHE">LATHE</option>
                <option value="RANDD">RANDD</option>
                <option value="INSPECT">INSPECT</option>
                <option value="ENGINEER">ENGINEER</option>
                <option value="GRIND">GRIND</option>
                <option value="ASSEMBLE">ASSEMBLE</option>
                <option value="ADMIN">ADMIN</option>
            </select>

            <label htmlFor="cycleTime">Cycle Time:</label>
            <input 
                type="text" 
                id="cycleTime" 
                name="cycleTime" 
                required 
                onChange={handleChange} 
                value={formData.cycleTime} 
                pattern="(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d" 
                title="Must be in HH:MM:SS format"
                placeholder="HH:MM:SS"
                aria-label="Cycle Time"
            />

            <label htmlFor="jobPhoto">Job Photo:</label>
            <input 
                type="file" 
                id="jobPhoto" 
                name="jobPhoto" 
                onChange={handleFileChange} 
                accept="image/*" 
                aria-label="Job Photo"
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default JobForm;
