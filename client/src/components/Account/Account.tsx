import { Box } from '@mui/material';
import React from 'react';
import { clearInfo } from 'src/store/slices/userSlice';
import styles from 'src/styles/accountStyle';
import { useAppDispatch } from 'src/types/Apphooks';

const Account = () => {
  const dispatch = useAppDispatch();
  return (
    <Box sx={styles.container}>
      <Box>Account</Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => dispatch(clearInfo())}>
        logout
      </Box>
    </Box>
  );
};

export default Account;
