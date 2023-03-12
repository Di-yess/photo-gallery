import { Avatar, Box, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { API } from 'src/constants/api';
import { useAppSelector } from 'src/types/Apphooks';
import styles from 'src/styles/accountStyle';

const AccountInfo = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <Paper elevation={2} sx={styles.accountInfo}>
      <Box sx={styles.paperGradient}></Box>
      <Avatar
        alt={user.name || 'avatar image'}
        src={API + '/' + user.avatar.link}
        component={Paper}
        elevation={2}
        sx={{ width: '79px', height: '79px', mb: ['2.5vh'] }}
      />
      <Stack direction='column'>
        <Box display='flex'>
          <Typography mr={1}>
            <b>Name</b>
          </Typography>
          <Typography>{user.name}</Typography>
        </Box>
        <Box display='flex'>
          <Typography mr={1}>
            <b>Email</b>
          </Typography>
          <Typography>{user.email}</Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default AccountInfo;
