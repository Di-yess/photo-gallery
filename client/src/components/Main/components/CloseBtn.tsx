import { Typography } from '@mui/material';
import React, { FC } from 'react';
import styles from '../.././styles/mainStyle';

type Props = {
  setImage: React.Dispatch<React.SetStateAction<Photo | null>>;
  blurElement: React.MutableRefObject<HTMLElement | null>;
};

const CloseBtn: FC<Props> = ({ setImage, blurElement }) => {
  return (
    <Typography
      variant="h5"
      onClick={() => {
        setImage(null);
        blurElement?.current?.classList.remove('blur');
      }}
      sx={styles.closeModal}
    >
      ✖
    </Typography>
  );
};

export default CloseBtn;
