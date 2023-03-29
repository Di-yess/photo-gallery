import { Box, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import { clearInfo } from 'src/store/slices/userSlice';
import styles from 'src/styles/accountStyle';
import { useAppDispatch } from 'src/types/Apphooks';
import { Image } from 'src/types/photo';
import Modal from '../Main/components/Modal';
import AccountImage from './components/AccountImage';
import AccountInfo from './components/AccountInfo';
import DragAndDrop from './components/DragAndDrop';
import Statistics from './components/Statistics';
import UploadedImage from './components/UploadedImage';

const Account = () => {
  const dispatch = useAppDispatch();
  const accountPageRef = useRef<HTMLElement | null>(null);
  const [image, setImage] = useState<Image | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  return (
    <>
      {image && (
        <Modal
          image={image}
          setImage={setImage}
          blurElement={accountPageRef}
          personal={true}
        />
      )}
      <Box sx={styles.account} ref={accountPageRef}>
        <Box sx={styles.container}>
          <Typography
            variant='h5'
            sx={{ pl: '10%', textDecoration: 'underline' }}
          >
            Account
          </Typography>
        </Box>
        <Box display='flex' my={2.5}>
          <Box mr={2.5}>
            <AccountInfo />
            <Statistics />
          </Box>
          <DragAndDrop setImageFile={setImageFile} />
        </Box>
        {imageFile ? (
          <UploadedImage imageFile={imageFile} setImageFile={setImageFile} />
        ) : (
          <AccountImage setImage={setImage} blurElement={accountPageRef} />
        )}
        <Box sx={{ cursor: 'pointer' }} onClick={() => dispatch(clearInfo())}>
          <Typography variant='body1' sx={{ color: 'grey.500', py: 1 }}>
            {' '}
            logout
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Account;
