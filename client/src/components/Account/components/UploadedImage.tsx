import {
  Box,
  Button,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

import { Clear } from '@mui/icons-material';

import { useState } from 'react';
import { uploadImageThunk } from 'src/store/asyncThunk/uploadImageThunk';
import styles from 'src/styles/accountStyle';
import { useAppDispatch, useAppSelector } from 'src/types/Apphooks';
import { ImageUploadInfo } from 'src/types/photo';

type Props = {
  imageFile: File;
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
};

const imageInfoInit: ImageUploadInfo = {
  name: '',
  description: '',
  x: '',
  y: '',
};

const UploadedImage = ({ imageFile, setImageFile }: Props) => {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.images.uploadImage);
  const [imageInfo, setImageInfo] = useState<ImageUploadInfo>(imageInfoInit);

  const onChangeInfoHandle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setImageInfo({ ...imageInfo, [name]: value });
  };

  const onHandleUpload = () => {
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('name', imageInfo.name);
    formData.append('description', imageInfo.description);

    dispatch(uploadImageThunk(formData));
  };

  return (
    <Paper elevation={2} sx={styles.uploadedImage}>
      <Paper elevation={2} sx={styles.uploadedImageCard}>
        {imageFile && (
          <img src={URL.createObjectURL(imageFile)} alt='downloadedImage' />
        )}
      </Paper>
      <Box sx={styles.uploadImageInfo}>
        <Typography variant='h5' sx={{ textDecoration: 'underline' }}>
          Edit me
        </Typography>
        <TextField
          sx={{ width: '100%' }}
          label='Name'
          name='name'
          required
          size='small'
          value={imageInfo.name}
          onChange={onChangeInfoHandle}
        />
        <TextField
          sx={{ width: '100%' }}
          label='Description'
          name='description'
          multiline
          rows={4}
          value={imageInfo.description}
          onChange={onChangeInfoHandle}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField
            sx={{ width: '50%' }}
            label='x'
            name='x'
            size='small'
            value={imageInfo.x}
            onChange={onChangeInfoHandle}
          />
          <TextField
            sx={{ width: '50%' }}
            label='y'
            name='y'
            size='small'
            value={imageInfo.y}
            onChange={onChangeInfoHandle}
          />
        </Box>
        <Button disableRipple variant='contained' onClick={onHandleUpload}>
          Upload
        </Button>
        <Box>
          {status === 'loading' && <CircularProgress />}
          {error}
        </Box>

        <Box
          sx={{ position: 'absolute', top: 8, right: 10, cursor: 'pointer' }}
          onClick={() => {
            setImageFile(null);
          }}
        >
          <Clear />
        </Box>
      </Box>
    </Paper>
  );
};

export default UploadedImage;
