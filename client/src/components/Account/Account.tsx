import { Box } from '@mui/material';
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
        <Modal image={image} setImage={setImage} blurElement={accountPageRef} />
      )}
      <Box sx={styles.account} ref={accountPageRef}>
        <Box sx={styles.container}>
          <Box>Account</Box>
          <Box sx={{ cursor: 'pointer' }} onClick={() => dispatch(clearInfo())}>
            logout
          </Box>
        </Box>
        <Box display='flex' my={2.5}>
          <Box mr={2.5}>
            <AccountInfo />
            <Statistics />
          </Box>
          <DragAndDrop setImageFile={setImageFile} />
        </Box>
        {imageFile ? (
          <UploadedImage imageFile={imageFile} />
        ) : (
          <AccountImage setImage={setImage} blurElement={accountPageRef} />
        )}
      </Box>
    </>
  );
};

export default Account;
