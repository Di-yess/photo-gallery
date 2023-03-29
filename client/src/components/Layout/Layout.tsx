import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import { Box, Button, ButtonGroup, IconButton } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from 'src/styles/layoutStyle';
import { useAppSelector } from 'src/types/Apphooks';

const Layout = () => {
  const navigate = useNavigate();
  const status = useAppSelector((state) => state.user.status);

  return (
    <Box sx={styles.navMenu}>
      <Box sx={styles.navIconBtns}>
        <IconButton>
          <DensityMediumOutlinedIcon />
        </IconButton>
        <ButtonGroup
          sx={styles.navMenuGroup}
          variant='text'
          aria-label='text button group'
        >
          <Button onClick={() => navigate('/')}>Main</Button>
          {status !== 'fulfilled' ? (
            <Button onClick={() => navigate('/login')}>Sign in</Button>
          ) : (
            <Button onClick={() => navigate('/account')}>Account</Button>
          )}
        </ButtonGroup>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Layout;
