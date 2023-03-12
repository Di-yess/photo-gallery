import { Paper, Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import styles from 'src/styles/accountStyle';
import { grey, red } from '@mui/material/colors';
import { Box } from '@mui/system';

const Statistics = () => {
  return (
    <Paper elevation={2} sx={styles.statistics}>
      <Stack direction='row' sx={styles.icons}>
        <Box sx={styles.icon}>
          <Typography mr={0.4}>100</Typography>
          <VisibilityIcon sx={{ fontSize: '25px', color: grey[500] }} />
        </Box>
        <Box sx={styles.icon}>
          <Typography mr={0.4}>1</Typography>
          <FavoriteIcon sx={{ fontSize: '25px', color: red[600] }} />
        </Box>
        <Box sx={styles.icon}>
          <Typography mr={0.4}>1</Typography>
          <ShareIcon sx={{ fontSize: '25px', color: grey[500] }} />
        </Box>
      </Stack>
    </Paper>
  );
};

export default Statistics;
