import React, { useState } from 'react';
import './currentJobs.css';

function CurrentJobs() {
    const [jobs, setJobs] = useState([
        { _id: '1', timeIn: '08:00', jobDescrip: 'description of job goes here', opNum: '101', jobNum: '4567890' },
        { _id: '2', timeIn: '09:15', jobDescrip: 'description of job goes here', opNum: '102', jobNum: '1234567' },
        { _id: '3', timeIn: '10:30', jobDescrip: 'description of job goes here', opNum: '103', jobNum: '7890123' },
        { _id: '4', timeIn: '11:45', jobDescrip: 'description of job goes here', opNum: '104', jobNum: '3456789' },
        { _id: '5', timeIn: '13:00', jobDescrip: 'description of job goes here', opNum: '105', jobNum: '5678901' },
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
        <div className="">
            <h1>Current Jobs</h1>
            <table className="jobs-table">
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Start</th>
                        <th>Job #</th>
                        <th>Op #</th>
                        <th>Description</th>

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
                            <td>{job.jobNum}</td>
                            <td>{job.opNum}</td>
                            <td>{job.jobDescrip}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleBulkAction}>Perform Bulk Action</button>
        </div>
    );
}

export default CurrentJobs;
