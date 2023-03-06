import { Paper } from '@mui/material';
import { FC } from 'react';
import { Comment } from 'types/comment';

type Props = {
  comment: Comment;
};

const Commentarie: FC<Props> = ({ comment }) => {
  return <Paper>Comment</Paper>;
};

export default Commentarie;
