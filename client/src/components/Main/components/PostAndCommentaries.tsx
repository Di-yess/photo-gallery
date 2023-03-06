import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styles from '../.././styles/mainStyle';

const PostAndCommentaries = () => {
  return (
    <Box sx={styles.postAndCommentaries}>
      <Typography variant="h5">Test</Typography>
      <Paper
        elevation={2}
        sx={{ width: '90%', height: '25px', margin: '1vh auto' }}
      >
        {' '}
        Paper
      </Paper>
    </Box>
  );
};

export default PostAndCommentaries;
