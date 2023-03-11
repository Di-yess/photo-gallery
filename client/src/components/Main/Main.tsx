import { Box, ImageListItem, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { API } from 'src/constants/api';
import { imageThunk } from 'src/store/asyncThunk/imageThunk';
import { selfUserThunk } from 'src/store/asyncThunk/selfUserThunk';
import { useAppDispatch, useAppSelector } from 'src/types/Apphooks';
import { Image } from 'src/types/photo';
import styles from '../../styles/mainStyle';
import Modal from './components/Modal';
import './Main.css';

const Main = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [image, setImage] = useState<Image | null>(null);
  const ref = useRef<HTMLElement | null>(null);
  const refCounter = useRef(0);

  const dispatch = useAppDispatch();
  const { images } = useAppSelector((state) => state.images);

  useEffect(() => {
    dispatch(imageThunk(refCounter));
    dispatch(selfUserThunk());
  }, [dispatch]);

  return (
    <>
      {image && <Modal image={image} setImage={setImage} blurElement={ref} />}
      <Box
        ref={ref}
        className={matches ? 'gridPhotos' : ''}
        sx={{ ...styles.grid, color: theme.palette.success.main }}
      >
        {/* adaptive */}
        {matches && images
          ? images.map((photo) => (
              <ImageListItem
                onClick={() => {
                  setImage(photo);
                  ref.current?.classList.add('blur');
                }}
                className='gridItem'
                key={photo.id}
              >
                <img
                  src={API + '/' + photo.link}
                  srcSet={`${
                    API + '/' + photo.link
                  }?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={photo.name}
                  loading='lazy'
                />
              </ImageListItem>
            ))
          : images?.map((photo) => (
              <ImageListItem
                sx={styles.gridItem}
                key={photo.id}
                onClick={() => {
                  setImage(photo);
                  ref.current?.classList.add('blur');
                }}
              >
                <img
                  src={API + '/' + photo.link}
                  srcSet={`${
                    API + '/' + photo.link
                  }?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={photo.name}
                  loading='lazy'
                />
              </ImageListItem>
            ))}
      </Box>
    </>
  );
};

export default Main;
