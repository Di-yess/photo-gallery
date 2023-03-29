import { Box, ImageListItem, useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { API } from 'src/constants/api';
import { imageThunk } from 'src/store/asyncThunk/imageThunk';
import { useAppDispatch, useAppSelector } from 'src/types/Apphooks';
import { Image } from 'src/types/photo';
import styles from '../../styles/mainStyle';
import Modal from './components/Modal';
import './Main.css';

const Main = () => {
  const dispatch = useAppDispatch();
  const [fetching, setFetching] = useState(true);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [image, setImage] = useState<Image | null>(null);

  const ref = useRef<HTMLElement | null>(null);
  const refCounter = useRef<number | null>(0);

  // const dispatch;

  const { images, status } = useAppSelector((state) => state.images);

  useEffect(() => {
    if (fetching && status !== 'loading') {
      dispatch(imageThunk(refCounter));
      setFetching((prev) => !prev);
    }
  }, [dispatch, fetching, status]);

  const scrollHandler = useCallback(() => {
    if (
      document.documentElement.scrollHeight -
        (document.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <>
      {image && (
        <Modal
          image={image}
          setImage={setImage}
          blurElement={ref}
          personal={false}
        />
      )}
      <Box
        ref={ref}
        className={matches ? 'gridPhotos' : ''}
        sx={{ ...styles.grid, color: 'success.main' }}
      >
        {/* adaptive */}
        {matches && images
          ? images.map((photo, index) => (
              <ImageListItem
                onClick={(e) => {
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
          : images?.map((photo, index) => (
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
