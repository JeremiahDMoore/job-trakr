import React, { useState } from 'react';
import '../currentJobs.css';

function CurrentJobs() {
    const [jobs, setJobs] = useState([
        { _id: '1', timeIn: '08:00', empNum: '123', opNum: '101', jobNum: '456-7890' },
        { _id: '2', timeIn: '09:15', empNum: '124', opNum: '102', jobNum: '123-4567' },
        { _id: '3', timeIn: '10:30', empNum: '125', opNum: '103', jobNum: '789-0123' },
        { _id: '4', timeIn: '11:45', empNum: '126', opNum: '104', jobNum: '345-6789' },
        { _id: '5', timeIn: '13:00', empNum: '127', opNum: '105', jobNum: '567-8901' },
    ]);
    const [selectedJobs, setSelectedJobs] = useState([]);

    const handleCheckboxChange = (jobId) => {
        setSelectedJobs(prevSelected => 
            prevSelected.includes(jobId) 
                ? prevSelected.filter(id => id !== jobId) 
                : [...prevSelected, jobId]
        );
    };

    const handleBulkAction = () => {
        // Perform bulk action on selectedJobs
        console.log('Performing bulk action on:', selectedJobs);
    };

    return (
        <div className="container">
            <h1>Current Jobs</h1>
            <table className="jobs-table">
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Time In</th>
                        <th>Employee Number</th>
                        <th>Operation Number</th>
                        <th>Job Number</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(job => (
                        <tr key={job._id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedJobs.includes(job._id)}
                                    onChange={() => handleCheckboxChange(job._id)}
                                />
                            </td>
                            <td>{job.timeIn}</td>
                            <td>{job.empNum}</td>
                            <td>{job.opNum}</td>
                            <td>{job.jobNum}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleBulkAction}>Perform Bulk Action</button>
        </div>
    );
}

export default CurrentJobs;
