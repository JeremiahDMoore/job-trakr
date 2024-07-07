import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import JobStart from './components/JobStart'; // Assuming you have this component
import LogIn from './components/Login'; // Assuming you have this component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/start-job" element={<JobStart />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/" element={<HomeScreen />} />
            </Routes>
        </Router>
    );
}

export default App;