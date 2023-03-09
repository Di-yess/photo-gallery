import { Box } from '@mui/system';
import { FC } from 'react';
import { Photo } from 'src/types/photo';
import styles from 'src/styles/mainStyle';
import PhotoInfo from './PhotoInfo';

type Props = {
  image: Photo;
};

const ModalPhoto: FC<Props> = ({ image }) => {
  return (
    <Box sx={styles.modalPhoto}>
      <img
        src={image.src}
        srcSet={`${image.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={image.name}
        loading="lazy"
      />
      <PhotoInfo image={image} />
    </Box>
  );
};

export default ModalPhoto;

/* <img
  style={{
    width: '100%',
    height: '95%',
    filter: 'blur(5px)',
    objectFit: 'cover',
    position: 'absolute',
    left: '0',
    zIndex: -1,
  }}
  src={image.src}
  srcSet={`${image.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
  alt={image.name}
  loading="lazy"
/> */
