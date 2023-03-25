import { InputLabel, Paper } from '@mui/material';
import styles from 'src/styles/accountStyle';
import UploadNewImage from './UploadNewImage';

type Props = {
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
};

const DragAndDrop = ({ setImageFile }: Props) => {
  return (
    <InputLabel
      htmlFor='uploadImage'
      sx={{ display: 'block', ...styles.dragAndDrop }}
    >
      <Paper elevation={2}>
        <input
          id='uploadImage'
          style={{ display: 'none' }}
          type='file'
          className='dragAndDrop'
          onChange={(e) => {
            if (e.target?.files) {
              setImageFile(e.target.files[0]);
              console.log(e.target.files[0]);
            }
          }}
        />
        <UploadNewImage />
      </Paper>
    </InputLabel>
  );
};

export default DragAndDrop;
