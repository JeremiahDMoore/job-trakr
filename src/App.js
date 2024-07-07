import React from 'react';
import JobForm from './components/JobForm';
import LogIn from './components/Login';
import JobStart from './components/JobStart';

function App() {
    return (
        <div className="container">
            <h1>JobTrakr</h1>
            <JobForm />
            {/* <JobStart /> */}
        </div>
    );
}

export default App;
