import { Box } from '@mui/material';
import { clearInfo } from 'src/store/slices/userSlice';
import styles from 'src/styles/accountStyle';
import { useAppDispatch } from 'src/types/Apphooks';
import AccountInfo from './components/AccountInfo';
import DragAndDrop from './components/DragAndDrop';
import Statistics from './components/Statistics';

const Account = () => {
  const dispatch = useAppDispatch();
  return (
    <Box sx={styles.account}>
      <Box sx={styles.container}>
        <Box>Account</Box>
        <Box sx={{ cursor: 'pointer' }} onClick={() => dispatch(clearInfo())}>
          logout
        </Box>
      </Box>
      <Box display='flex' my={2}>
        <Box mr={2.5}>
          <AccountInfo />
          <Statistics />
        </Box>
        <DragAndDrop />
      </Box>
    </Box>
  );
};

export default Account;
