import { Box, CircularProgress } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import styles from 'src/styles/mainStyle';
import { IExtendedImage, Image } from 'src/types/photo';
import { fetchFullImage } from 'src/utils/fetches';
import '.././Main.css';
import CloseBtn from './CloseBtn';
import ModalPhoto from './ModalPhoto';
import NavigationBtns from './NavigationBtns';
import PostAndCommentaries from './PostAndCommentaries';

type Props = {
  image: Image;
  setImage: React.Dispatch<React.SetStateAction<Image | null>>;
  blurElement: React.MutableRefObject<HTMLElement | null>;
  personal: boolean;
};

const Modal: FC<Props> = ({ image, setImage, blurElement, personal }) => {
  const [fullImage, setFullImage] = useState<
    IExtendedImage | 'loading' | 'error'
  >('loading');

  useEffect(() => {
    fetchFullImage(image.id, setFullImage);
  }, [image.id, image]);

  return (
    <>
      {typeof fullImage !== 'string' ? (
        <Box sx={styles.modal}>
          <ModalPhoto image={fullImage} />
          <PostAndCommentaries image={fullImage} />
          <CloseBtn setImage={setImage} blurElement={blurElement} />
          <NavigationBtns
            setFullImage={setFullImage}
            setImage={setImage}
            image={image}
            personal={personal}
          />
        </Box>
      ) : (
        <Box sx={{ ...styles.modal, bgcolor: 'transparent' }}>
          <CircularProgress sx={{ color: 'white' }} />
        </Box>
      )}
    </>
  );
};

export default Modal;

// need an error in case it didn`t come
