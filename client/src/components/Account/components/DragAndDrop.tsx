import { Paper } from '@mui/material';
import styles from 'src/styles/accountStyle';
import UploadNewImage from './UploadNewImage';

const DragAndDrop = () => {
  return (
    <Paper elevation={2} sx={styles.dragAndDrop}>
      <input type='file' className='dragAndDrop' />
      <UploadNewImage />
    </Paper>
  );
};

export default DragAndDrop;
