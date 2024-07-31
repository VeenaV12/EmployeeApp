import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  function capValue() {
    axios.post('http://localhost:3000/user/login', form).then((res) => {
      alert(res.data.message);
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        navigate('/userview');
      }
    });
  }

  // Function to reset the form
  function resetForm() {
    setForm({
      email: '',
      password: ''
    });
  }

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, width: '50ch' },
            color: 'Grey',
            padding: '30px',
            border: 3,
            mx: 'auto',
            maxWidth: 800,
            margin: '75px 400px',
            alignContent: 'center',
            backgroundColor: 'ghostwhite',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <h2 style={{ textAlign: 'center' }}>User Login</h2>
          <hr />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Button variant="contained" onClick={capValue} color='success'>Submit</Button>
            <Button variant="contained" onClick={resetForm} color='success'>Cancel</Button>
            <Link to={'/'}>
              <Button variant="contained" color='success'>Home</Button>
            </Link>
          </Stack>
        </Box>
      </Grid>
    </div>
  );
}

export default UserLogin;
