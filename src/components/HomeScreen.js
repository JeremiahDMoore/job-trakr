import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentJobs from './CurrentJobs';
import './homeScreen.css';

function HomeScreen() {
    const [jobs, setJobs] = useState([
    {
        id: 1,
        title: 'Job 1',
        description: 'This is job 1',
    },
    {
        id: 2,
        title: 'Job 2',
        description: 'This is job 2',
    },
    {
        id: 3,
        title: 'Job 3',
        description: 'This is job 3',
    }
    ]);

    const navigate = useNavigate();

    const handleStartJob = () => {
        navigate('/start-job');
    };

    const handleStopJob = () => {
        if (jobs.length > 0) {
            // Perform stop job logic
            console.log('Stopping jobs');
            setJobs([]);
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="home-container">
            <h1>Hello world!</h1>
            {jobs.length > 0 ? (
                <CurrentJobs jobs={jobs} />
            ) : (
                <p>Not logged in to any jobs</p>
            )}
            <div className="button-group">
                <button onClick={handleStartJob}>Start New Job</button>
                <button onClick={handleStopJob}>
                    {jobs.length > 0 ? 'Stop Current Jobs' : 'Back to Login'}
                </button>
            </div>
        </div>
    );
}

export default HomeScreen;
