import { Box } from '@mui/material';
import React, { FC } from 'react';
import { useAppSelector } from 'src/types/Apphooks';
import styles from '../../../styles/mainStyle';
import '.././Main.css';
import CloseBtn from './CloseBtn';
import ModalPhoto from './ModalPhoto';
import PostAndCommentaries from './PostAndCommentaries';

type Props = {
  image: Photo;
  setImage: React.Dispatch<React.SetStateAction<Photo | null>>;
  blurElement: React.MutableRefObject<HTMLElement | null>;
};

const Modal: FC<Props> = ({ image, setImage, blurElement }) => {
  // const user = useAppSelector((state) => state.user);
  return (
    <Box sx={styles.modal}>
      <ModalPhoto image={image} />
      <PostAndCommentaries />
      <CloseBtn setImage={setImage} blurElement={blurElement} />
    </Box>
  );
};

export default Modal;
