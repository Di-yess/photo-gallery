import { Box } from '@mui/system';
import React from 'react';
import { IExtendedImage, Image } from 'src/types/photo';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useAppSelector } from 'src/types/Apphooks';
import styles from 'src/styles/mainStyle';

type Props = {
  setFullImage: React.Dispatch<
    React.SetStateAction<IExtendedImage | 'loading' | 'error'>
  >;
  setImage: React.Dispatch<React.SetStateAction<Image | null>>;
  image: Image;
  personal: boolean;
};

const NavigationBtns = ({ setFullImage, setImage, image, personal }: Props) => {
  const personalImages = useAppSelector((state) => state.user.images);
  const globalImages = useAppSelector((state) => state.images.images);

  const shownImages = personal ? personalImages : globalImages;

  const onNextImageHandler = () => {
    const indexOfImage = shownImages?.findIndex(
      (shownImage) => shownImage.id === image.id
    );

    if (
      shownImages?.length &&
      indexOfImage !== shownImages.length - 1 &&
      indexOfImage !== undefined &&
      indexOfImage >= 0
    ) {
      setImage(shownImages[indexOfImage + 1]);
    }
  };

  const onPrevImageHandler = () => {
    const indexOfImage = shownImages?.findIndex(
      (userImage) => userImage.id === image.id
    );

    if (shownImages?.length && indexOfImage !== undefined && indexOfImage > 0) {
      setImage(shownImages[indexOfImage - 1]);
    }
  };

  return (
    <Box sx={styles.navigationBtns}>
      <IconButton onClick={onPrevImageHandler}>
        <ArrowBackIosNew fontSize='large' />
      </IconButton>
      <IconButton onClick={onNextImageHandler}>
        <ArrowForwardIos fontSize='large' />
      </IconButton>
    </Box>
  );
};

export default NavigationBtns;
