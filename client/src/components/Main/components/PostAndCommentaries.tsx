import { Box } from '@mui/material';
import { FC, useState } from 'react';
import styles from 'src/styles/mainStyle';
import { commentaries, user } from '../data/commentaries';
import Commentarie from './Commentarie';
import InputMessage from './InputMessage';
import Post from './Post';

const PostAndCommentaries: FC = () => {
  const [comments, setComments] = useState(commentaries);
  return (
    <Box sx={styles.postAndCommentaries}>
      <Post user={user} />
      <Box sx={styles.comments}>
        {comments &&
          comments.map((comment) => (
            <Commentarie key={comment.id} comment={comment} />
          ))}
      </Box>
      <InputMessage setComments={setComments} />
    </Box>
  );
};

export default PostAndCommentaries;
