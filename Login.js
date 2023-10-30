import React from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import './Login.css';

function Login() {
    return (
        <div classname="container">
        <Container>
            <Typography variant="h4" gutterBottom>Welcome to Portland, Oregon</Typography>
            <Typography variant="h5" gutterBottom>Procurement Management</Typography>
            <TextField label="Username" variant="outlined" fullWidth margin="normal" />
            <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" />
            <Button variant="contained" color="primary" fullWidth>Login</Button>
        </Container>
        </div>
    );
}

export default Login;
