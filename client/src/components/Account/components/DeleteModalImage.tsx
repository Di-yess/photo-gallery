import { Button, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch } from 'src/types/Apphooks';
import { IExtendedImage } from 'src/types/photo';
import { deleteImageThunk } from 'src/store/asyncThunk/deleteImageThunk';
import styles from 'src/styles/accountStyle';

type Props = {
  image: IExtendedImage;
  setImageToDelete: React.Dispatch<React.SetStateAction<IExtendedImage | null>>;
};

const DeleteModalImage = ({ image, setImageToDelete }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <Paper elevation={2} sx={styles.confirmDeleteImage}>
      <Box sx={styles.confirmBody}>
        <Typography>Do you really want to delete {image.name}?</Typography>
        <Box sx={styles.confirmBodyButtons}>
          <Button
            size='small'
            variant='outlined'
            onClick={() => {
              setImageToDelete(null);
            }}
          >
            No
          </Button>
          <Button
            onClick={() => {
              setImageToDelete(null);
              dispatch(deleteImageThunk(image.id));
            }}
            size='small'
            variant='contained'
          >
            Yes
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default DeleteModalImage;
