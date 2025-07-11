import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './Home';
import PrivateRoute from './auth/PrivateRoute';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<PrivateRoute />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;