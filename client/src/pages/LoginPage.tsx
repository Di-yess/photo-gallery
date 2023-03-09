import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { login } from 'src/store/asyncThunk/login';
import { useAppDispatch, useAppSelector } from 'src/types/Apphooks';
import Copyright from 'src/components/Login/Copyright';
import { register } from 'src/store/asyncThunk/register';
import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignIn() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [regist, setRegist] = useState(false);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.user.status);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email && password && !regist) {
      dispatch(login({ email, password, navigate }));
    }
    if (email && password && name && regist) {
      dispatch(register({ email, password, name, navigate }));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            {!regist ? 'Sign in' : 'Sign up'}
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {regist && (
              <TextField
                margin='normal'
                size='small'
                required
                fullWidth
                id='email'
                label='Name'
                name='name'
                autoComplete='name'
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <TextField
              margin='normal'
              size='small'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin='normal'
              size='small'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Box width='100%' display='flex' flexDirection='column'>
              <Button
                type='submit'
                size='medium'
                variant='contained'
                sx={{ px: 2.5, margin: '1.1vh auto 0.5vh' }}
              >
                {!regist ? 'Sign in' : 'Sign up'}
              </Button>
              {status === 'loading' && (
                <CircularProgress sx={{ margin: '0.5vh auto' }} size={24} />
              )}
              <Typography
                sx={{
                  margin: '0 auto',
                  color: theme.palette.grey[500],
                  cursor: 'pointer',
                }}
                onClick={() => setRegist((prev) => !prev)}
              >
                {!regist ? 'Sign up' : 'Sign in'}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 0, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
