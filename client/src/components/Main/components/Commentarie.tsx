import { Avatar, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import styles from 'src/styles/mainStyle';
import { Comment } from 'src/types/comment';

type Props = {
  comment: Comment;
};

const Commentarie: FC<Props> = ({ comment }) => {
  const [fullText, setFullText] = useState(false);
  return (
    <Paper elevation={2} sx={styles.commentPaper}>
      <Avatar
        src={comment.src}
        alt='someone'
        sx={{ width: '30px', height: '30px', marginRight: '0.5vw' }}
      />
      <Box sx={{ marginBottom: '0.75vh' }}>
        <Typography sx={{ fontSize: '14px', fontWeight: '600' }}>
          {comment.name}
        </Typography>
        <Typography
          onClick={() => setFullText((prev) => !prev)}
          sx={styles.commentText}
        >
          {comment.text.length > 50 && !fullText
            ? comment.text.slice(0, 50) + '...'
            : comment.text}
        </Typography>
      </Box>
      <Typography sx={styles.commentCreatedAt}>{comment.createdAt}</Typography>
    </Paper>
  );
};

export default Commentarie;
