import React from 'react';
import { useAuth } from './auth/AuthContext';
import { Button, Container, Typography } from '@mui/material';

const Home = () => {
    const { user, logout } = useAuth();

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Welcome to the Home Page
            </Typography>
            {user && (
                <Button variant="contained" color="primary" onClick={logout}>
                    Logout
                </Button>
            )}
        </Container>
    );
};

export default Home;