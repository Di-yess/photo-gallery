import { Box } from '@mui/system';
import { FC } from 'react';
import { API } from 'src/constants/api';
import styles from 'src/styles/mainStyle';
import { IExtendedImage } from 'src/types/photo';
import PhotoInfo from './PhotoInfo';

type Props = {
  image: IExtendedImage;
};

const ModalPhoto: FC<Props> = ({ image }) => {
  return (
    <Box sx={styles.modalPhoto}>
      <img
        src={API + '/' + image.link}
        srcSet={`${
          API + '/' + image.link
        }?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={image.name}
        loading='lazy'
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
