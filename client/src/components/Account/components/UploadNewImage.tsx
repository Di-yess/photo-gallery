import { Box, Typography } from '@mui/material';
import styles from 'src/styles/accountStyle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { grey } from '@mui/material/colors';

const UploadNewImage = () => {
  return (
    <Box sx={styles.uploadNewImage}>
      <Typography fontSize={19} color={grey[400]}>
        Upload image
      </Typography>
      <AddCircleIcon sx={{ fontSize: '40px', color: '#CAF4EC' }} />
    </Box>
  );
};

export default UploadNewImage;
