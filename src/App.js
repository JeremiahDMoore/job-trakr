import React from 'react';
import JobStop from './components/JobStop';
import LogIn from './components/Login';
import JobStart from './components/JobStart';

function App() {
    return (
        <div className="container">
            <h1>JobTrakr</h1>
            <JobStop />
            {/* <JobStart /> */}
        </div>
    );
}

export default App;
