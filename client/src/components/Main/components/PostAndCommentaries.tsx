import { Box } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import styles from 'src/styles/mainStyle';
import { IComment, IExtendedImage } from 'src/types/photo';
import Commentarie from './Commentarie';
import InputMessage from './InputMessage';
import Post from './Post';

type Props = {
  image: IExtendedImage;
};

const PostAndCommentaries: FC<Props> = ({ image }) => {
  const [comments, setComments] = useState<IComment[]>([]);

  useEffect(() => {
    setComments(image.comments);
  }, [image]);

  return (
    <Box sx={styles.postAndCommentaries}>
      <Post image={image} />
      <Box sx={styles.comments}>
        {comments &&
          comments.map((comment) => (
            <Commentarie key={comment.id} comment={comment} />
          ))}
      </Box>
      <InputMessage imageId={image.id} setComments={setComments} />
    </Box>
  );
};

export default PostAndCommentaries;
