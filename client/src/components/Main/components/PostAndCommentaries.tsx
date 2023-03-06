import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import styles from '../.././styles/mainStyle';
import { commentaries, user } from '../data/commentaries';
import Commentarie from './Commentarie';
import Post from './Post';

const PostAndCommentaries = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <Box sx={styles.postAndCommentaries}>
      <Post user={user} />
      {commentaries &&
        commentaries.map((comment) => <Commentarie comment={comment} />)}
    </Box>
  );
};

export default PostAndCommentaries;
