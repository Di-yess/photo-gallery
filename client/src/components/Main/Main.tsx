import { Box, ImageListItem, useMediaQuery, useTheme } from '@mui/material';
import { useRef, useState } from 'react';
import styles from '../styles/mainStyle';
import Modal from './components/Modal';
import { photos } from './data/photos';
import './Main.css';

const Main = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [image, setImage] = useState<Photo | null>(null);
  const ref = useRef<HTMLElement | null>(null);

  return (
    <>
      {image && <Modal image={image} setImage={setImage} blurElement={ref} />}
      <Box
        ref={ref}
        className={matches ? 'gridPhotos' : ''}
        sx={{ ...styles.grid, color: theme.palette.success.main }}
      >
        {/* adaptive */}
        {matches
          ? photos.map((photo, i) => (
              <ImageListItem
                onClick={() => {
                  setImage(photo);
                  ref.current?.classList.add('blur');
                }}
                className="gridItem"
                key={photo.src + i}
              >
                <img
                  src={photo.src}
                  srcSet={`${photo.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={photo.name}
                  loading="lazy"
                />
              </ImageListItem>
            ))
          : photos.map((photo, i) => (
              <ImageListItem
                sx={styles.gridItem}
                key={photo.src + i}
                onClick={() => {
                  setImage(photo);
                  ref.current?.classList.add('blur');
                }}
              >
                <img
                  src={photo.src}
                  srcSet={`${photo.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={photo.name}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
      </Box>
    </>
  );
};

export default Main;
